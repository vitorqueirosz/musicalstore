import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.lightBg};
    width: 40rem;
    border-radius: ${theme.borderRadius.xs};
    border-top-right-radius: 0;
    max-height: 25rem;
    padding: ${theme.spacings['2xs']};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes['2lg']};
    font-family: 'Rowdies Regular';
    margin-bottom: ${theme.spacings.xs};
  `}
`;
