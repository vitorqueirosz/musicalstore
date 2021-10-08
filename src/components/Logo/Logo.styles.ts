import styled, { css } from 'styled-components';
import { LogoProps } from './Logo';

const wrapperModifiers = {
  normal: () => css`
    width: 20rem;
    height: 8rem;
  `,
  large: () => css`
    width: 31.5rem;
    height: 10rem;
  `,
  hideText: () => css`
    width: 8rem;
    height: 8rem;

    .text {
      display: none;
    }
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ size, hideText }) => css`
    svg {
      width: 100%;
    }

    ${size && wrapperModifiers[size]}
    ${hideText && wrapperModifiers.hideText()}
  `}
`;
