import { Container } from 'components';

type BaseProps = {
  children: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  return <Container>{children}</Container>;
};
