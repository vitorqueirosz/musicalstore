import styled, { css, DefaultTheme } from 'styled-components';

type MenuLinkProps = {
  isActive?: boolean;
};

export const Wrapper = styled.nav`
  margin: 0 ${({ theme }) => theme.spacings.xs};
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

    ${isActive && menuLinkModifiers.active(theme)}
  `}
`;
