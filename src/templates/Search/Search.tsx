import { useCallback, useMemo, useRef } from 'react';
import {
  Heading,
  CategoriesSidebar,
  InitialValues,
  ProductProps,
  Product,
} from 'components';
import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';
import { useRouter } from 'next/dist/client/router';
import { ParsedUrlQueryInput } from 'querystring';
import { Base } from 'templates';
import * as S from './Search.styles';
import { useSearchProducts } from 'hooks';

export type SearchProps = {
  initialData: ProductProps[];
};

export const initialValue = {
  category: [],
  type: [],
};

const filterItems = [
  {
    category: ENUM_CATEGORIES.drum,
    types: [
      ENUM_TYPES.sticks,
      ENUM_TYPES.childishDrum,
      ENUM_TYPES.box,
      ENUM_TYPES.pads,
      ENUM_TYPES.skins,
      ENUM_TYPES.dish,
    ],
  },
  {
    category: ENUM_CATEGORIES.rope,
    types: [
      ENUM_TYPES.guitar,
      ENUM_TYPES.acoustic,
      ENUM_TYPES.bass,
      ENUM_TYPES.ukulele,
    ],
  },
  {
    category: ENUM_CATEGORIES.blow,
    types: [ENUM_TYPES.harmonica, ENUM_TYPES.sax, ENUM_TYPES.flute],
  },
];

export const Search = ({ initialData }: SearchProps) => {
  const { query, push } = useRouter();
  const pushRef = useRef(push);

  const { data } = useSearchProducts(
    {
      products: initialData,
    },
    query,
  );

  const handleFilterValues = useCallback((items: ParsedUrlQueryInput) => {
    pushRef.current({
      pathname: '/search',
      query: items,
    });
  }, []);

  const initialValues = useMemo(() => {
    const hasQueryValue = Object.keys(query).length;

    if (hasQueryValue) return query;

    return initialValue;
  }, [query]);

  return (
    <Base>
      <S.Content>
        <Heading>Categorias</Heading>
        <CategoriesSidebar
          filterItems={filterItems}
          onFilterValues={handleFilterValues}
          initialValues={initialValues as InitialValues}
        />
        {data?.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </S.Content>
    </Base>
  );
};
