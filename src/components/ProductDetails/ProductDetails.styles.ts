import styled, { css, DefaultTheme } from 'styled-components';
import { Wrapper as ButtonWrapper } from 'components/Button/Button.styles';

type ZoomedImageProps = {
  show: boolean;
};

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
  display: flex;
  flex-direction: column;
`;

const thumbImageModifiers = {
  selected: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary};
  `,
};

export const ThumbImage = styled.img<{ selected: boolean }>`
  width: 6.5rem;
  height: 5.4rem;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacings.xs};
  border: 0.2rem solid transparent;

  ${({ theme, selected }) => selected && thumbImageModifiers.selected(theme)}
`;

export const Box = styled.div`
  max-width: 58rem;
  height: 38rem;
  flex-grow: 1;

  span {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

const zoomedImageModifiers = {
  show: () => css`
    opacity: 1;
  `,
};

export const ZoomedImage = styled.img<ZoomedImageProps>`
  position: absolute;
  opacity: 0;
  width: 110rem;
  height: 80rem;
  border: none;
  max-width: none;
  max-height: none;
  cursor: pointer;

  ${({ show }) => show && zoomedImageModifiers.show()};
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
    justify-content: space-between;
    align-items: center;
    background: #2e2e2e;
    width: 100%;
    padding: ${theme.spacings.xs};
    border-radius: ${theme.borderRadius.xs};

    ${ButtonWrapper} {
      width: 100%;
      max-width: 19rem;
    }
  `}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BuyContainer = styled.div``;

export const AmountContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 10rem;

    span {
      font-size: ${theme.font.sizes['2lg']};
      color: ${theme.colors.lightGray};
    }
  `}
`;

export const ButtonState = styled.button`
  ${({ theme }) => css`
    border: none;
    background: ${theme.colors.mainBg};
    padding: 2px;
    cursor: pointer;
  `}
`;
