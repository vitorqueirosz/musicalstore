import styled, { css } from 'styled-components';
import { Wrapper as ButtonWrapper } from 'components/Button/Button.styles';
import media from 'styled-media-query';

type WrapperProps = {
  src: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ src }) => css`
    position: relative;
    background-size: cover;
    background-position: center center;
    background-image: url(${src});
    height: 30.5rem;
    max-width: 99rem;
    margin: auto;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    index: 1;

    ${media.lessThan('medium')`
      width: 80vw;
      height: 14rem;
      max-width: 42rem;
    `}
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;

    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 8rem;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: ${theme.borderRadius.sm};
    border-bottom-right-radius: ${theme.borderRadius.sm};
    padding-right: ${theme.spacings.xs};

    ${media.lessThan('medium')`
      height: 4.2rem;

      ${ButtonWrapper} {
        height: 2.8rem;
        width: 12rem;
        font-size: ${theme.font.sizes.sm};
      }
    `}
  `}
`;
