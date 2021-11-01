import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { CategoriesSidebar } from './CategoriesSidebar';
import { mockedFilterItems } from './CategoriesSidebar.mock';

describe('<CategoriesSidebar />', () => {
  it('should return the component correctly', () => {
    renderWithTheme(
      <CategoriesSidebar
        filterItems={mockedFilterItems}
        onFilterValues={jest.fn()}
      />,
    );

    expect(
      screen.getByRole('checkbox', { name: /bateria/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /cordas/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /sopro/i }),
    ).toBeInTheDocument();
  });
});
