import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import userEvent from '@testing-library/user-event';
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
    expect(screen.getByLabelText(/cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();

    expect(screen.getAllByText('Home')).toHaveLength(2);
    expect(screen.getAllByText('Search')).toHaveLength(2);
  });

  it('should handle the aside menu states', () => {
    renderWithTheme(<Menu />);

    const menu = screen.getByLabelText('menu');

    expect(menu.getAttribute('aria-hidden')).toBe('true');
    expect(menu).toHaveStyle({ transform: 'translateX(-100%)' });

    userEvent.click(screen.getByLabelText(/open menu/i));

    expect(menu.getAttribute('aria-hidden')).toBe('false');
    expect(menu).toHaveStyle({ transform: 'translateX(0)' });
  });
});
