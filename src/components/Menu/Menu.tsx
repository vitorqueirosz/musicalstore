import { Logo } from 'components';
import { Button } from 'components/Button/Button';
import { Icon } from 'components';
import { Nav } from 'components/Nav/Nav';
import { links } from './Menu.mock';

import * as S from './Menu.styles';

export const Menu = () => {
  return (
    <S.Wrapper>
      <S.Divisor>
        <Logo />
        <Nav links={links} />
      </S.Divisor>

      <S.Divisor>
        <Icon icon="IcCart" />
        <Button>Sign in</Button>
      </S.Divisor>
    </S.Wrapper>
  );
};
