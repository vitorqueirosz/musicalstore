import * as S from './Heading.styles';

export type HeadingProps = { children: React.ReactNode };

export const Heading = ({ children }: HeadingProps) => {
  return <S.Heading>{children}</S.Heading>;
};
