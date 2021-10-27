import styled, { css } from 'styled-components';

export const Heading = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border-bottom: 2px solid ${theme.colors.secondary};
  `}
`;
