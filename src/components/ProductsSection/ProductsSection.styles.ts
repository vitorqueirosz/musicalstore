import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xlg};
  `}
`;

export const Heading = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border-bottom: 2px solid ${theme.colors.secondary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xs};
  `}
`;
