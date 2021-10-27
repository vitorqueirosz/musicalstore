import { Checkbox } from 'components';
import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';
import { translatedLabel } from './CategoriesSidebar.mock';
import * as S from './CategoriesSidebar.styles';

export type FilterItems = {
  category: ENUM_CATEGORIES;
  types: ENUM_TYPES[];
};

type CategoriesSidebarProps = {
  filterItems: FilterItems[];
};

export const CategoriesSidebar = ({ filterItems }: CategoriesSidebarProps) => {
  return (
    <S.Aside>
      {filterItems.map((item) => (
        <S.Category key={item.category}>
          <Checkbox
            label={translatedLabel[item.category]}
            inputSize="large"
            labelFor={item.category}
          />
          <S.Divisor>
            {item.types.map((type) => (
              <Checkbox
                key={type}
                label={translatedLabel[type]}
                labelFor={type}
              />
            ))}
          </S.Divisor>
        </S.Category>
      ))}
    </S.Aside>
  );
};
