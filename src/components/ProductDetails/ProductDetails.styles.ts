import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 16rem 1fr 33rem;
  margin-top: ${({ theme }) => theme.spacings.lg};
`;

export const Images = styled.div`
  img {
    width: 12rem;
    height: 8rem;
    object-fit: contain;
  }
`;

export const Image = styled.img`
  width: 50rem;
  max-height: 32rem;
  margin: auto;
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    h3,
    small,
    p {
      color: ${theme.colors.white};
    }

    small {
      margin: ${theme.spacings.xs} 0;
    }

    p {
      font-family: 'Rowdies Light';
      font-size: ${theme.font.sizes.xlg};
    }
  `}
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2e2e2e;
    width: 100%;
    padding: ${theme.spacings.xs};
    border-radius: ${theme.borderRadius.xs};
  `}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
