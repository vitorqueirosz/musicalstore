import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { ProductDetails, ProductDetailsProps } from './ProductDetails';
import userEvent from '@testing-library/user-event';

const props: ProductDetailsProps = {
  id: '1',
  name: 'product',
  images: ['image1', 'image2'],
  price: '250',
  category: '',
  brand: 'brand',
  type: 'guitar',
};

describe('<ProductDetails />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<ProductDetails {...props} />);

    expect(screen.getAllByLabelText('thumb image')).toHaveLength(
      props.images.length,
    );
    expect(screen.getByLabelText('highlight image')).toHaveAttribute(
      'src',
      props.images[0],
    );
  });

  it('should change the selected image by clicking', () => {
    renderWithTheme(<ProductDetails {...props} />);

    userEvent.click(screen.getAllByLabelText('thumb image')[1]);

    expect(screen.getByLabelText('highlight image')).toHaveAttribute(
      'src',
      props.images[1],
    );
  });
});
