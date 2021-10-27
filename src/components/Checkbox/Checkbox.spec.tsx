import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/render';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should render the checkbox input correctly', () => {
    renderWithTheme(
      <Checkbox
        label="Bateria"
        labelFor="drum"
        onChange={jest.fn()}
        isChecked
      />,
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/bateria/i)).toBeInTheDocument();
    expect(screen.getByText(/bateria/i)).toHaveAttribute('for', 'drum');
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should check on click', () => {
    renderWithTheme(
      <Checkbox label="Bateria" labelFor="drum" onChange={jest.fn()} />,
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();

    userEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
  });
});
