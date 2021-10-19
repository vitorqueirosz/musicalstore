import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/render';
import { Dropdown, DropdownProps } from './Dropdown';

const props: DropdownProps = {
  children: 'children',
  title: 'title',
};

describe('<Dropdown />', () => {
  it('should render the Dropdown correctly', () => {
    renderWithTheme(<Dropdown {...props} />);

    const contentElement = screen.getByText('children');
    const overlay = contentElement.nextElementSibling;

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(contentElement.getAttribute('aria-hidden')).toBe('true');
    expect(contentElement).toHaveStyle({
      opacity: '0',
    });
    expect(overlay).not.toBeInTheDocument();
  });

  it('should render the Content', () => {
    renderWithTheme(<Dropdown {...props} />);

    const contentElement = screen.getByText('children');
    const titleElement = screen.getByText('title');

    expect(contentElement.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(titleElement);

    expect(contentElement.getAttribute('aria-hidden')).toBe('false');
    expect(contentElement).toHaveStyle({
      opacity: '1',
    });
  });

  it('should render the Overlay and close the content', () => {
    renderWithTheme(<Dropdown {...props} hasOverlay />);

    const contentElement = screen.getByText('children');
    const overlay = contentElement.nextElementSibling;
    const titleElement = screen.getByText('title');

    expect(overlay).toBeInTheDocument();
    expect(overlay!.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(titleElement);

    expect(overlay).toHaveStyle({
      opacity: '1',
    });

    expect(overlay!.getAttribute('aria-hidden')).toBe('false');

    userEvent.click(overlay!);

    expect(overlay!.getAttribute('aria-hidden')).toBe('true');
    expect(overlay).toHaveStyle({
      opacity: '0',
    });
  });
});
