import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render the default Logo correctly', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(screen.getByRole('img').parentElement).toHaveStyle({
      width: '20rem',
      height: '8rem',
    });
    expect(container.querySelector('.text')).toBeInTheDocument();
  });

  it('should render the large Logo correctly', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByRole('img').parentElement).toHaveStyle({
      width: '31.5rem',
      height: '10rem',
    });
  });

  it('should render the Logo without text', () => {
    const { container } = renderWithTheme(<Logo hideText />);

    expect(screen.getByRole('img').parentElement).toHaveStyle({
      width: '8rem',
      height: '8rem',
    });

    expect(container.querySelector('.text')).toHaveStyle({
      display: 'none',
    });
  });
});
