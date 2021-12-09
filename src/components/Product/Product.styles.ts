import { EllipsisMultiLine } from 'components/EllipsisMultiline/EllipsisMultiline';
import styled, { css, DefaultTheme } from 'styled-components';
import { ProductProps } from './Product';
import { darken } from 'polished';

type WrapperProps = Pick<ProductProps, 'type'>;

type RemoveProductProps = {
  isInTheCart: boolean;
};

const wrapperModifiers = {
  vertical: (theme: DefaultTheme) => css`
    flex-direction: column;
    max-width: 14.5rem;
    height: 24.5rem;
    border-radius: ${theme.borderRadius.xs};
    cursor: pointer;

    ${Content} {
      flex-direction: column;
    }

    ${Image} {
      width: 100%;
      min-height: 12rem;
      max-height: 12rem;
    }

    ${Infos} {
      margin-top: ${theme.spacings['2xs']};

      p {
        flex: 1;
      }
    }

    &:hover {
      ${ButtonsContainer} {
        transform: translateY(0);
        pointer-events: all;
        opacity: 1;
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
    display: flex;
    flex-direction: column;
    height: 100%;

    span,
    p {
      font-size: ${theme.font.sizes.xs};
      color: ${theme.colors.gray};
      ${EllipsisMultiLine}
      -webkit-line-clamp: 3;
    }

    span {
      font-weight: bold;
      margin-top: calc(${theme.spacings['2xs']} / 2);
    }
  `}
`;

export const RemoveProduct = styled.button`
  cursor: pointer;
  border: none;
`;

const buttonsContainerModifiers = {
  isInTheCart: (theme: DefaultTheme) => css`
    transform: translateY(0);
    pointer-events: all;
    opacity: 1;

    ${ButtonCart} {
      background: ${theme.colors.red};
    }

    ${AmountContainer} {
      width: 7rem;
      opacity: 1;
    }
  `,
};

export const ButtonsContainer = styled.div<RemoveProductProps>`
  ${({ theme, isInTheCart }) => css`
    display: flex;
    border: none;
    background: ${theme.colors.secondary};
    transform: translateY(100%);
    border-bottom-left-radius: ${theme.borderRadius.xs};
    border-bottom-right-radius: ${theme.borderRadius.xs};
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    pointer-events: none;
    opacity: 0;
    max-height: 2.3rem;

    ${AmountContainer} {
      width: 0;
      opacity: 0;
    }

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }

    ${isInTheCart && buttonsContainerModifiers.isInTheCart(theme)}
  `}
`;

export const ButtonCart = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xs};
  cursor: pointer;
`;

export const AmountContainer = styled.aside`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    transition: width 0.2s ease-in-out, opacity 0.3s ease-in-out;
    background: ${theme.colors.secondary};

    span {
      color: ${theme.colors.white};
      width: 2rem;
      text-align: center;
    }
  `}
`;

export const ButtonState = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.secondary)};
  }
`;
