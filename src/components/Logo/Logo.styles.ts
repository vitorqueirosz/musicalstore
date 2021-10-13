import styled, { css } from 'styled-components';
import { LogoProps } from './Logo';

const wrapperModifiers = {
  small: () => css`
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  normal: () => css`
    svg {
      width: 20rem;
      height: 8rem;
    }
  `,
  large: () => css`
    svg {
      width: 31.5rem;
      height: 10rem;
    }
  `,
  hideText: (isSmall?: boolean) => css`
    width: 6rem;

    .text {
      display: none;
    }

    ${isSmall && wrapperModifiers.small()}
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ size, hideText }) => css`
    > svg {
      width: 100%;
    }

    ${size && wrapperModifiers[size]}
    ${hideText && wrapperModifiers.hideText(size === 'small')}
  `}
`;
