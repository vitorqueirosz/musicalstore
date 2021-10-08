import { Logo } from 'components';
import { Button } from 'components/Button/Button';
import { LinkElement, Nav } from 'components/Nav/Nav';

import * as S from './Menu.styles';

const links: LinkElement[] = [
  {
    href: '/home',
    label: 'Home',
  },
  {
    href: '/search',
    label: 'Search',
  },
];

export const Menu = () => {
  return (
    <S.Wrapper>
      <S.Divisor>
        <Logo />
        <Nav links={links} />
      </S.Divisor>

      <S.Divisor>
        <Button>Sign in</Button>
      </S.Divisor>
    </S.Wrapper>
  );
};
