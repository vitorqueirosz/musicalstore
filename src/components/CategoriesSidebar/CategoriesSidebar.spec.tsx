import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { CategoriesSidebar } from './CategoriesSidebar';
import { mockedFilterItems } from './CategoriesSidebar.mock';
import { ENUM_CATEGORIES, ENUM_TYPES } from 'constants/enums';
import userEvent from '@testing-library/user-event';

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

  it('should return the initial values correctly', () => {
    renderWithTheme(
      <CategoriesSidebar
        filterItems={mockedFilterItems}
        initialValues={{
          category: [ENUM_CATEGORIES.drum],
          type: [ENUM_TYPES.sticks],
        }}
        onFilterValues={jest.fn()}
      />,
    );

    expect(screen.getByRole('checkbox', { name: /bateria/i })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /baquetas/i })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: /cordas/i })).not.toBeChecked();
  });

  it('should dispatch the values correctly by clicking on category', () => {
    const onFilterValues = jest.fn();

    renderWithTheme(
      <CategoriesSidebar
        filterItems={mockedFilterItems}
        onFilterValues={onFilterValues}
      />,
    );

    userEvent.click(screen.getByRole('checkbox', { name: /sopro/i }));

    const values = {
      category: [ENUM_CATEGORIES.blow],
      type: [ENUM_TYPES.harmonica, ENUM_TYPES.sax, ENUM_TYPES.flute],
    };

    expect(onFilterValues).toHaveBeenCalledWith(values);
  });

  it('should dispatch the values correctly by clicking on types', () => {
    const onFilterValues = jest.fn();

    renderWithTheme(
      <CategoriesSidebar
        filterItems={mockedFilterItems}
        onFilterValues={onFilterValues}
      />,
    );

    userEvent.click(screen.getByRole('checkbox', { name: /pads/i }));
    userEvent.click(screen.getByRole('checkbox', { name: /peles/i }));

    const values = {
      category: [ENUM_CATEGORIES.drum],
      type: [ENUM_TYPES.pads, ENUM_TYPES.skins],
    };

    expect(onFilterValues).toHaveBeenCalledWith(values);
  });

  it('should dispatch the values correctly by clicking on types and removing', () => {
    const onFilterValues = jest.fn();

    renderWithTheme(
      <CategoriesSidebar
        filterItems={mockedFilterItems}
        onFilterValues={onFilterValues}
      />,
    );

    userEvent.click(screen.getByRole('checkbox', { name: /cordas/i }));
    userEvent.click(screen.getByRole('checkbox', { name: /guitarra/i }));

    const values = {
      category: [ENUM_CATEGORIES.rope],
      type: [ENUM_TYPES.guitar],
    };

    expect(onFilterValues).toHaveBeenLastCalledWith(values);
  });
});
