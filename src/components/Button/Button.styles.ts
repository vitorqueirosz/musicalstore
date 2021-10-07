import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!color && wrapperModifiers[color](theme)}
  `}
`;
