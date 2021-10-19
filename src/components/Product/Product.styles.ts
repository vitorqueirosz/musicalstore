import styled, { css, DefaultTheme } from 'styled-components';
import { ProductProps } from './Product';

type WrapperProps = Pick<ProductProps, 'type'>;

const wrapperModifiers = {
  vertical: (theme: DefaultTheme) => css`
    flex-direction: column;
    max-width: 14.5rem;
    height: 23.5rem;
    border-radius: ${theme.borderRadius.xs};

    ${Content} {
      flex-direction: column;
    }

    ${Image} {
      width: 100%;
      height: 12rem;
    }

    ${Infos} {
      margin-top: ${theme.spacings['2xs']};
    }

    ${RemoveProduct} {
      min-height: 2.3rem;
      background: ${theme.colors.secondary};
      text-align: center;
      border-bottom-left-radius: ${theme.borderRadius.xs};
      border-bottom-right-radius: ${theme.borderRadius.xs};

      svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  `,
  horizontal: (theme: DefaultTheme) => css`
    width: 100%;

    & + div {
      border-top: 1px solid #bcbcbc;
    }

    ${Image} {
      width: 7.5rem;
      height: 7.5rem;
    }

    ${Infos} {
      margin-left: ${theme.spacings['2xs']};
    }

    ${RemoveProduct} {
      display: flex;
      padding: ${theme.spacings['2xs']};
      text-align: start;
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.sm};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, type }) => css`
    display: flex;
    background: ${theme.colors.lightBg};

    ${type && wrapperModifiers[type](theme)}
  `}
`;

export const Content = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacings['2xs']};
  flex: 1;
`;

export const Image = styled.img``;

export const Infos = styled.div`
  ${({ theme }) => css`
    span,
    p {
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.gray};
    }

    span {
      font-weight: bold;
    }
  `}
`;

export const RemoveProduct = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;
