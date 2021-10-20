import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    max-width: ${theme.grid.container};

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.xs};
    `}
  `}
`;
