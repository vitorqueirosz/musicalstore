import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  size: 'normal' | 'large';
};

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    ${Input} {
      width: 1.2rem;
      height: 1.2rem;
    }
    ${Label} {
      font-size: ${theme.font.sizes.md};
    }
  `,
  large: (theme: DefaultTheme) => css`
    ${Input} {
      width: 1.4rem;
      height: 1.4rem;
    }
    ${Label} {
      font-size: ${theme.font.sizes.lg};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;

    ${size && wrapperModifiers[size](theme)}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    background: ${theme.colors.white};
    margin-right: ${theme.spacings['2xs']};

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
