import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  color?: 'primary' | 'secondary';
} & ButtonTypes;

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  color = 'primary',
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} color={color} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
