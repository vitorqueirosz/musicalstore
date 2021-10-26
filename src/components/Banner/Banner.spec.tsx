import { screen } from '@testing-library/react';
import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/render';
import { BannerProps, Banner } from './Banner';

const props: BannerProps = {
  image: 'test',
};

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(container.firstChild).toHaveAttribute('src', props.image);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should render the Banner with button', () => {
    const { container } = renderWithTheme(
      <Banner {...props} buttonLabel="test" />,
    );

    expect(container.firstChild).toHaveAttribute('src', props.image);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
