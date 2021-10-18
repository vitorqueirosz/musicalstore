import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-list {
      max-width: 100rem;
      margin: auto;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }

    .slick-dots {
      list-style: none;
      position: absolute;
      right: 5%;
      bottom: 50%;
      transform: translateY(50%);

      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;

        & + li {
          margin-top: ${theme.spacings['2xs']};
        }
      }

      .slick-active {
        background: ${theme.colors.primary};
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.lessThan('medium')`
        .slick-list {
          max-width: 90vw;
          margin: auto;
        }

        .slick-dots {
            li {
            display: none;
          }
        }
      `}
  `}
`;
