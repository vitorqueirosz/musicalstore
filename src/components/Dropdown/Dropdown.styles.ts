import styled, { css } from 'styled-components';

type ContentProps = {
  show: boolean;
};

export const Wrapper = styled.div``;

export const Title = styled.div``;

const contentModifiers = {
  show: () => css`
    visibility: visible;
    pointer-events: all;
    opacity: 1;
  `,
};

export const Content = styled.div<ContentProps>`
  ${({ show }) => css`
    visibility: hidden;
    pointer-events: none;
    opacity: 0;

    ${show && contentModifiers.show()}
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
