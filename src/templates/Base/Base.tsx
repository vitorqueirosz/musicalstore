import { Container, Menu } from 'components';

type BaseProps = {
  children: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
};
