import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  src: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ src }) => css`
    background-size: cover;
    background-position: center center;
    background-image: url(${src});
    height: 30.5rem;
    max-width: 99rem;

    ${media.lessThan('medium')`
      width: 80vw;
      height: 14rem;
      max-width: 42rem;
    `}
  `}
`;
