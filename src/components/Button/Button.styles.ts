import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { ButtonProps } from './Button';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};

    &:hover {
      background: ${darken(0.1, theme.colors.secondary)};
    }
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
    border: none;
    border-radius: ${theme.borderRadius.xs};
    font-size: ${theme.font.sizes['2lg']};
    font-family: 'Rowdies Regular';
    color: ${theme.colors.white};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    ${!!color && wrapperModifiers[color](theme)}
    ${!!size && wrapperModifiers[size]()}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`;
