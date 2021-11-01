import { InputHTMLAttributes } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  isChecked?: boolean;
  label: string;
  labelFor?: string;
  value?: string | ReadonlyArray<string> | number;
  name?: string;
  inputSize?: 'normal' | 'large';
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  label,
  labelFor,
  inputSize = 'normal',
  value,
  isChecked,
  ...props
}: CheckboxProps) => {
  return (
    <S.Wrapper size={inputSize}>
      <S.Input
        id={labelFor}
        type="checkbox"
        value={value}
        checked={isChecked}
        {...props}
      />
      <S.Label htmlFor={labelFor}>{label}</S.Label>
    </S.Wrapper>
  );
};
