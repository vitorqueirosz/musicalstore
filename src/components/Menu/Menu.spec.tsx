import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Menu } from './Menu';

jest.mock('next/dist/client/router', () => ({
  useRouter: () => ({
    asPath: '',
  }),
}));

describe('<Menu />', () => {
  it('should render the menu successfully', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });
});
