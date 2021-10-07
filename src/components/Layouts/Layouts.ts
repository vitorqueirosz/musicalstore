import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    max-width: ${theme.grid.container};
  `}
`;
