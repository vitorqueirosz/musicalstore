import styled, { css } from 'styled-components';
import { Wrapper as ButtonWrapper } from 'components/Button/Button.styles';
import media from 'styled-media-query';

type AsideProps = {
  isOpen: boolean;
};

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.greaterThan('medium')`
    flex: 1;
  `}
`;

const asideModifiers = {
  open: () => css`
    transform: translateX(0);
  `,
};

export const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Aside = styled.aside<AsideProps>`
  ${({ theme, isOpen }) => css`
    display: none;
    width: 60%;
    position: fixed;
    height: 100vh;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    background: #060606;
    pointer-events: ${isOpen ? 'all' : 'none'};
    padding: ${theme.spacings.xs};

    span {
      color: ${theme.colors.white};
    }

    > nav {
      margin-top: ${theme.spacings.xs};
    }

    ${media.lessThan('medium')`
      display: block;
    `}

    ${isOpen && asideModifiers.open()}
  `}
`;

export const IconWrapper = styled.button`
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
`;

export const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1.1rem;
  right: -1rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightBg};
`;

export const SignInButton = styled.div`
  ${ButtonWrapper}, svg {
    margin-left: ${({ theme }) => theme.spacings.xs};
  }
`;

export const Cart = styled.div``;
