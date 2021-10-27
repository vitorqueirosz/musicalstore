import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xlg};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xs};

    .slick-list {
      position: relative;
    }

    .slick-arrow {
      position: relative;

      &.slick-prev,
      &.slick-next {
        display: block;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 1;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: ${theme.spacings['2xs']};
        transition: background 0.3s ease-in;
        color: ${theme.colors.lightGray};
        background: #150040;

        &:hover {
          background: ${lighten(0.08, '#150040')};
        }
      }

      &.slick-prev {
        left: -4%;
      }

      &.slick-next {
        right: -4%;
      }
    }
  `}
`;
