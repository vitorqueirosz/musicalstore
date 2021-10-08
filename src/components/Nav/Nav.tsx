import Link from 'next/link';
import * as S from './Nav.styles';

export type LinkElement = {
  href: string;
  label: string;
  isActive?: boolean;
};

type NavProps = {
  links: LinkElement[];
};

export const Nav = ({ links }: NavProps) => {
  return (
    <S.Wrapper>
      {links.map(({ href, label, isActive }) => (
        <Link key={href} href={href} passHref>
          <S.MenuLink isActive={isActive}>{label}</S.MenuLink>
        </Link>
      ))}
    </S.Wrapper>
  );
};
