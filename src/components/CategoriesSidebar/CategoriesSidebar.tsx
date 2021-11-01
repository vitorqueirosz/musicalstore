import { Checkbox } from 'components';
import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';
import { useCallback, useEffect, useState } from 'react';
import { translatedLabel } from './CategoriesSidebar.mock';
import * as S from './CategoriesSidebar.styles';

export type FilterItems = {
  category: ENUM_CATEGORIES;
  types: ENUM_TYPES[];
};

type InitialValues = {
  category: string[];
  type: { name: string; type: string }[];
};

type CategoriesSidebarProps = {
  filterItems: FilterItems[];
  initialValues?: InitialValues;
  onFilterValues: (values: InitialValues) => void;
};

const types = {
  [ENUM_CATEGORIES.drum]: [
    { name: ENUM_TYPES.sticks, type: ENUM_CATEGORIES.drum },
    { name: ENUM_TYPES.childishDrum, type: ENUM_CATEGORIES.drum },
    { name: ENUM_TYPES.box, type: ENUM_CATEGORIES.drum },
    { name: ENUM_TYPES.pads, type: ENUM_CATEGORIES.drum },
    { name: ENUM_TYPES.skins, type: ENUM_CATEGORIES.drum },
    { name: ENUM_TYPES.dish, type: ENUM_CATEGORIES.drum },
  ],
  [ENUM_CATEGORIES.rope]: [
    { name: ENUM_TYPES.guitar, type: ENUM_CATEGORIES.rope },
    { name: ENUM_TYPES.acoustic, type: ENUM_CATEGORIES.rope },
    { name: ENUM_TYPES.bass, type: ENUM_CATEGORIES.rope },
    { name: ENUM_TYPES.ukulele, type: ENUM_CATEGORIES.rope },
  ],
  [ENUM_CATEGORIES.blow]: [
    { name: ENUM_TYPES.harmonica, type: ENUM_CATEGORIES.blow },
    { name: ENUM_TYPES.sax, type: ENUM_CATEGORIES.blow },
    { name: ENUM_TYPES.flute, type: ENUM_CATEGORIES.blow },
  ],
} as Record<string, { name: string; type: string }[]>;

const LAST_ITEM = 1;

export const CategoriesSidebar = ({
  filterItems,
  initialValues = {
    category: [],
    type: [],
  },
  onFilterValues,
}: CategoriesSidebarProps) => {
  const [filterValues, setFilterValues] =
    useState<InitialValues>(initialValues);
  const [fallbackValues, setFallbackValues] =
    useState<InitialValues>(initialValues);

  const handleFilterValues = useCallback(
    (value: ENUM_CATEGORIES | ENUM_TYPES, fieldName: 'category' | 'type') => {
      setFilterValues((prevState) => {
        const hasCategory = prevState.category.includes(value);

        if (fieldName === 'category' && hasCategory) {
          const filteredCategories = prevState.category.filter(
            (category) => category !== value,
          );
          const filteredTypes = prevState.type.filter(
            (item) => item.type !== value,
          );

          return {
            category: filteredCategories,
            type: filteredTypes,
          };
        }

        if (fieldName === 'type') {
          const category = Object.values(types).reduce((acc, type) => {
            const typeExists = type.find((t) => t.name === value);

            return (acc = typeExists?.type || acc);
          }, '');

          const hasType = prevState.type.some((type) => type.name === value);

          if (hasType) {
            const hasCategoryFallback =
              fallbackValues.category.includes(category);

            const typesLength = prevState.type.filter(
              (type) => type.type === category,
            ).length;

            const filteredTypes = prevState.type.filter(
              (type) => type.name !== value,
            );

            const hasOneLastType = typesLength === LAST_ITEM;

            if (hasCategoryFallback && hasOneLastType) {
              return {
                category: [...prevState.category],
                type: [...filteredTypes, ...types[category]],
              };
            }

            const filteredTypesByCategory = prevState.type.filter(
              (type) => type.type !== category,
            );

            const filteredCategories = prevState.category.filter(
              (c) => c !== category,
            );

            const hasTypeFallback = fallbackValues.type.some(
              (t) => t.type === category,
            );

            const categories = hasOneLastType
              ? filteredCategories
              : [...prevState.category];

            const typesArr = hasTypeFallback
              ? filteredTypes
              : [...filteredTypesByCategory, { name: value, type: category }];

            return {
              category: categories,
              type: typesArr,
            };
          }

          const hasCategory = prevState.category.includes(category);
          const categories = hasCategory
            ? [...prevState.category]
            : [...prevState.category, category];

          return {
            category: categories,
            type: [...prevState.type, { name: value, type: category }],
          };
        }

        return {
          category: [...prevState.category, value],
          type: [...prevState.type, ...types[value]],
        };
      });
      handleFallbackValues(value, fieldName);
    },
    [fallbackValues.category, fallbackValues.type],
  );

  useEffect(() => {
    onFilterValues(filterValues);
  }, [onFilterValues, filterValues]);

  const handleFallbackValues = (
    value: string,
    fieldName: 'category' | 'type',
  ) => {
    setFallbackValues((prevState) => {
      if (fieldName === 'category') {
        const hasCategory = prevState.category.includes(value);

        if (hasCategory) {
          const filteredCategories = prevState.category.filter(
            (category) => category !== value,
          );

          return {
            category: filteredCategories,
            type: [...prevState.type],
          };
        }

        return {
          category: [...prevState.category, value],
          type: [...prevState.type],
        };
      }

      const category = Object.values(types).reduce((acc, type) => {
        const typeExists = type.find((t) => t.name === value);

        return (acc = typeExists?.type || acc);
      }, '');

      const hasCategory = prevState.type.some((type) => type.name === value);
      const filteredTypes = prevState.type.filter(
        (type) => type.name !== value,
      );
      const typesArr = hasCategory
        ? filteredTypes
        : [...prevState.type, { name: value, type: category }];

      return {
        category: [...prevState.category],
        type: typesArr,
      };
    });
  };

  return (
    <S.Aside>
      {filterItems.map((item) => (
        <S.Category key={item.category}>
          <Checkbox
            label={translatedLabel[item.category]}
            inputSize="large"
            labelFor={item.category}
            onChange={() => handleFilterValues(item.category, 'category')}
            isChecked={fallbackValues.category.includes(item.category)}
          />
          <S.Divisor>
            {item.types.map((type) => (
              <Checkbox
                key={type}
                label={translatedLabel[type]}
                labelFor={type}
                isChecked={fallbackValues.type.some((t) => t.name === type)}
                onChange={() => handleFilterValues(type, 'type')}
              />
            ))}
          </S.Divisor>
        </S.Category>
      ))}
    </S.Aside>
  );
};
