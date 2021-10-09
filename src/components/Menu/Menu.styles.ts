import styled from 'styled-components';
import { Wrapper as ButtonWrapper } from 'components/Button/Button.styles';

export const Wrapper = styled.menu`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;

  ${ButtonWrapper} {
    margin-left: ${({ theme }) => theme.spacings.xs};
  }
`;
