import styled, { css } from 'styled-components';

export const Aside = styled.aside``;

export const Divisor = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings['2xs']} ${theme.spacings.xs};
  `}
`;

export const Category = styled.div``;
