import styled, { css } from 'styled-components';
import * as Icons from '../../../public/icons';

type IconKeys = keyof typeof Icons;

type IconProps = {
  width?: string;
  height?: string;
  icon: IconKeys;
  color?: string;
};

export const Icon = styled.svg.attrs<IconProps>(({ icon }) => ({
  as: Icons[icon],
}))<IconProps>`
  ${({ theme, width = '2.4rem', height = '2.4rem', color }) => css`
    width: ${width};
    height: ${height};
    color: ${color ?? theme.colors.white};
  `}
`;
