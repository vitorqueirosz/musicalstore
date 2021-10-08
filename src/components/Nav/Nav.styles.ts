import styled, { css } from 'styled-components';
import { LinkElement } from './Nav';

type MenuLinkProps = Pick<LinkElement, 'isActive'>;

export const Wrapper = styled.nav`
  margin: 0 ${({ theme }) => theme.spacings.xs};
`;

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings['2xs']};
    color: ${theme.colors.white};
    font-family: 'Rowdies Light';
    font-size: ${theme.font.sizes['2lg']};
  `}
`;
