import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

type MenuLinkProps = {
  isActive?: boolean;
};

export const Wrapper = styled.nav`
  margin: 0 ${({ theme }) => theme.spacings.xs};

  ${media.lessThan('medium')`
    display: flex;
    margin: 0;
    flex-direction: column;
  `}
`;

const menuLinkModifiers = {
  active: (theme: DefaultTheme) => css`
    border-bottom-color: ${theme.colors.primary};
    border-bottom-width: 2px;
  `,
};

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, isActive }) => css`
    margin: 0 ${theme.spacings['2xs']};
    color: ${theme.colors.white};
    font-family: 'Rowdies Light';
    font-size: ${theme.font.sizes.lg};
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.white};
    transition: all 0.3s ease-in-out;

    ${media.lessThan('medium')`
      border-bottom: 0;
      margin-bottom: ${theme.spacings['2xs']};
    `}

    ${isActive && menuLinkModifiers.active(theme)}
  `}
`;
