import styled, { css } from 'styled-components';

export const Content = styled.div`
  flex: 1;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    padding-top: ${theme.spacings.lg};
    grid-template-columns: 20rem 1fr;
    height: 100%;
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    > div {
      margin: 0 ${theme.spacings.xs} ${theme.spacings.xs} 0;
    }
  `}
`;
