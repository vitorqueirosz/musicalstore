import styled, { css, DefaultTheme } from 'styled-components';

type LabelProps = {
  size: 'normal' | 'large';
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: ${theme.colors.white};
    margin-right: ${theme.spacings['2xs']};

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};
    }
  `}
`;

const labelModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.sm};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};
  `,
};

export const Label = styled.label<LabelProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};

    ${size && labelModifiers[size](theme)}
  `}
`;
