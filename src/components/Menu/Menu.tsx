import { Logo, Nav, Button, Icon, MediaMatch } from 'components';
import { useToggle, useClickOutside } from 'hooks';
import { links } from './Menu.mock';

import * as S from './Menu.styles';

export const Menu = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const asideElementRef = useClickOutside(() => setIsOpen(false));

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen()}>
          <Icon icon="IcMenu" />
        </S.IconWrapper>
      </MediaMatch>

      <Logo hideText />

      <MediaMatch greaterThan="medium">
        <Nav links={links} />
      </MediaMatch>

      <S.Divisor>
        <Icon icon="IcCart" />

        <S.SignInButton>
          <MediaMatch lessThan="medium">
            <Icon icon="IcUser" />
          </MediaMatch>
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        </S.SignInButton>
      </S.Divisor>

      <S.Aside isOpen={isOpen} ref={asideElementRef}>
        <Logo hideText />

        <span>Ola, Vitor!</span>

        <Nav links={links} />
      </S.Aside>
    </S.Wrapper>
  );
};
