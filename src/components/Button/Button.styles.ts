import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `,
  small: () => css`
    width: 11rem;
    height: 4.4rem;
  `,
  medium: () => css`
    width: 14.5rem;
  `,
  large: () => css`
    width: 19.8rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color, fullWidth, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;

    ${!!color && wrapperModifiers[color](theme)}
    ${!!size && wrapperModifiers[size]()}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`;
