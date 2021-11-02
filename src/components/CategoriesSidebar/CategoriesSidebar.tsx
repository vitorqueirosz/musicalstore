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
  type: string[];
};

type CategoriesSidebarProps = {
  filterItems: FilterItems[];
  initialValues?: InitialValues;
  onFilterValues: (values: InitialValues) => void;
};

const types = {
  [ENUM_CATEGORIES.drum]: [
    ENUM_TYPES.sticks,
    ENUM_TYPES.childishDrum,
    ENUM_TYPES.box,
    ENUM_TYPES.pads,
    ENUM_TYPES.skins,
    ENUM_TYPES.dish,
  ],
  [ENUM_CATEGORIES.rope]: [
    ENUM_TYPES.guitar,
    ENUM_TYPES.acoustic,
    ENUM_TYPES.bass,
    ENUM_TYPES.ukulele,
  ],
  [ENUM_CATEGORIES.blow]: [
    ENUM_TYPES.harmonica,
    ENUM_TYPES.sax,
    ENUM_TYPES.flute,
  ],
} as Record<string, string[]>;

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
    (
      value: ENUM_CATEGORIES | ENUM_TYPES,
      fieldName: 'category' | 'type',
      category?: ENUM_CATEGORIES,
    ) => {
      setFilterValues((prevState) => {
        const hasCategory = prevState.category.includes(value);

        if (fieldName === 'category' && hasCategory) {
          const filteredCategories = prevState.category.filter(
            (category) => category !== value,
          );

          const typesByCategory = types[value];

          const filteredTypes = prevState.type.filter(
            (type) => !typesByCategory.includes(type),
          );

          return {
            category: filteredCategories,
            type: filteredTypes,
          };
        }

        if (fieldName === 'type' && category) {
          const hasType = prevState.type.includes(value);
          const typesByCategory = types[category];

          if (hasType) {
            const hasCategoryFallback =
              fallbackValues.category.includes(category);

            const typesLength = prevState.type.filter((type) =>
              typesByCategory.includes(type),
            ).length;

            const filteredTypes = prevState.type.filter(
              (type) => type !== value,
            );

            const hasOneLastType = typesLength === LAST_ITEM;

            if (hasCategoryFallback && hasOneLastType) {
              return {
                category: [...prevState.category],
                type: [...filteredTypes, ...types[category]],
              };
            }

            const filteredTypesByCategory = prevState.type.filter(
              (type) => !typesByCategory.includes(type),
            );

            const filteredCategories = prevState.category.filter(
              (c) => c !== category,
            );

            const hasTypeFallback = fallbackValues.type.some((type) =>
              typesByCategory.includes(type),
            );

            const categories = hasOneLastType
              ? filteredCategories
              : [...prevState.category];

            const typesArr = hasTypeFallback
              ? filteredTypes
              : [...filteredTypesByCategory, value];

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
            type: [...prevState.type, value],
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

      const hasCategory = prevState.type.includes(value);
      const filteredTypes = prevState.type.filter((type) => type !== value);
      const typesArr = hasCategory ? filteredTypes : [...prevState.type, value];

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
                isChecked={fallbackValues.type.includes(type)}
                onChange={() => handleFilterValues(type, 'type', item.category)}
              />
            ))}
          </S.Divisor>
        </S.Category>
      ))}
    </S.Aside>
  );
};
