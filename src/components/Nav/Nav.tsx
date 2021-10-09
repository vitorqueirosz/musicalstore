import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import * as S from './Nav.styles';

export type LinkElement = {
  href: string;
  label: string;
};

type NavProps = {
  links: LinkElement[];
};

export const Nav = ({ links }: NavProps) => {
  const { asPath } = useRouter();

  return (
    <S.Wrapper>
      {links.map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <S.MenuLink isActive={asPath === href}>{label}</S.MenuLink>
        </Link>
      ))}
    </S.Wrapper>
  );
};
