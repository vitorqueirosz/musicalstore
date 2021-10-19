import styled, { css } from 'styled-components';

type ContentProps = {
  show: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const Title = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  display: flex;
`;

const contentModifiers = {
  show: () => css`
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  `,
};

export const Content = styled.div<ContentProps>`
  ${({ theme, show }) => css`
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    z-index: ${theme.layers.alwaysOnTop};
    transition: transform 0.2s ease-in-out, opacity 0.2s linear;
    transform: translateY(5%);
    right: 0;
    margin-top: ${theme.spacings.xs};

    &::before {
      content: '';
      position: absolute;
      border-left: 2rem solid transparent;
      border-bottom: 1rem solid ${theme.colors.white};
      top: -0.8rem;
      right: 0;
    }

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
