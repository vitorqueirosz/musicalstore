import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Product, ProductProps } from './Product';

const props: ProductProps = {
  id: '1',
  image: 'http://mock-image',
  name: 'product',
  price: '250',
};

describe('<Product />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Product {...props} />);

    const wrapper = screen.getByLabelText('link').parentElement;

    expect(screen.getByRole('img', { name: props.name })).toHaveAttribute(
      'src',
      props.image,
    );

    expect(wrapper).toHaveStyle({
      'max-width': '14.5rem',
    });
  });

  it('should render the component successfully', () => {
    renderWithTheme(<Product {...props} type="horizontal" />);

    const wrapper = screen.getByLabelText('link').parentElement;

    expect(
      screen.getByRole('button', { name: /remover/i }),
    ).toBeInTheDocument();

    expect(wrapper).toHaveStyle({
      width: '100%',
    });
  });
});
