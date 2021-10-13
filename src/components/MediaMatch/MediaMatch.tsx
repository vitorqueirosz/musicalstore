import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type Breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: Breakpoint;
  greaterThan?: Breakpoint;
};

const matchModifiers = {
  lessThan: (breakpoint: Breakpoint) => css`
    ${media.lessThan(breakpoint)`
      display: block;
    `}
  `,
  greaterThan: (breakpoint: Breakpoint) => css`
    ${media.greaterThan(breakpoint)`
      display: block;
    `}
  `,
};

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${lessThan && matchModifiers.lessThan(lessThan)}
    ${greaterThan && matchModifiers.greaterThan(greaterThan)}
  `}
`;
