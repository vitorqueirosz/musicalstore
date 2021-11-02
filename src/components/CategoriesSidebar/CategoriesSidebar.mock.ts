import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';

export const translatedLabel = {
  [ENUM_CATEGORIES.drum]: 'Bateria',
  [ENUM_CATEGORIES.rope]: 'Cordas',
  [ENUM_CATEGORIES.blow]: 'Sopro',
  [ENUM_TYPES.sticks]: 'Baquetas',
  [ENUM_TYPES.childishDrum]: 'Bateria infantil',
  [ENUM_TYPES.box]: 'Caixa',
  [ENUM_TYPES.pads]: 'Pads',
  [ENUM_TYPES.skins]: 'Peles',
  [ENUM_TYPES.dish]: 'Pratos',
  [ENUM_TYPES.guitar]: 'Guitarra',
  [ENUM_TYPES.acoustic]: 'Violão',
  [ENUM_TYPES.bass]: 'Baixo',
  [ENUM_TYPES.ukulele]: 'Ukulele',
  [ENUM_TYPES.harmonica]: 'Gaita',
  [ENUM_TYPES.sax]: 'Saxofone',
  [ENUM_TYPES.flute]: 'Flauta',
};

export const mockedFilterItems = [
  {
    category: ENUM_CATEGORIES.drum,
    types: [ENUM_TYPES.sticks, ENUM_TYPES.pads, ENUM_TYPES.skins],
  },
  {
    category: ENUM_CATEGORIES.rope,
    types: [ENUM_TYPES.guitar],
  },
  {
    category: ENUM_CATEGORIES.blow,
    types: [ENUM_TYPES.harmonica],
  },
];
