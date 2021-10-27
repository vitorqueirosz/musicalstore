import styled, { css } from 'styled-components';

export const Aside = styled.aside`
  ${({ theme }) => css`
    padding: ${theme.spacings.xs} 0;
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings['2xs']} ${theme.spacings.xs};
  `}
`;

export const Category = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.sm} 0;
  `}
`;
