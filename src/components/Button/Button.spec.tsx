import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render the component correctly', () => {
    renderWithTheme(<Button />);

    expect(screen.getByRole('button')).toHaveStyle({
      width: '14.5rem',
      height: '4.8rem',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small" />);

    expect(screen.getByRole('button')).toHaveStyle({
      width: '11rem',
      height: '4.4rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large" />);

    expect(screen.getByRole('button')).toHaveStyle({
      width: '19.8rem',
    });
  });
});
