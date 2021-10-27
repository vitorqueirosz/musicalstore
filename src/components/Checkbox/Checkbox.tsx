import { InputHTMLAttributes } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  isChecked?: boolean;
  label: string;
  labelFor?: string;
  value?: string | ReadonlyArray<string> | number;
  name?: string;
  labelSize?: 'normal' | 'large';
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  label,
  labelFor,
  labelSize = 'normal',
  value,
  isChecked,
  ...props
}: CheckboxProps) => {
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        value={value}
        checked={!!value || isChecked}
        {...props}
      />
      <S.Label htmlFor={labelFor} size={labelSize}>
        {label}
      </S.Label>
    </S.Wrapper>
  );
};
