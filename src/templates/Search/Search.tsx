import { Heading, CategoriesSidebar } from 'components';
import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';
import { Base } from 'templates';
import * as S from './Search.styles';

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

export const Search = () => {
  return (
    <Base>
      <S.Content>
        <Heading>Categorias</Heading>
        <CategoriesSidebar filterItems={filterItems} />
      </S.Content>
    </Base>
  );
};
