import { HomeProps } from 'templates';
import { HomeQueryPayload } from 'utils/home';
import { homeMapper } from '.';

describe('homeMapper()', () => {
  it('should return the data correctly', () => {
    const product = {
      id: '1',
      name: 'product',
      price: '5',
    };

    const productWithImages = {
      ...product,
      images: [
        {
          url: 'image',
        },
      ],
    };

    const payload: HomeQueryPayload = {
      home: {
        banners: [
          {
            image: {
              url: 'image',
            },
          },
        ],
        highlights: {
          title: 'title',
          products: [productWithImages],
        },
        releases: {
          title: 'title',
          products: [productWithImages],
        },
      },
    };

    const homePayload: HomeProps = {
      banners: [
        {
          image: `${process.env.NEXT_PUBLIC_API_URL}image`,
        },
      ],
      highlights: {
        title: 'title',
        products: [
          {
            ...product,
            image: `${process.env.NEXT_PUBLIC_API_URL}image`,
          },
        ],
      },
      releases: {
        title: 'title',
        products: [
          {
            ...product,
            image: `${process.env.NEXT_PUBLIC_API_URL}image`,
          },
        ],
      },
    };

    expect(homeMapper(payload)).toStrictEqual(homePayload);
  });
});
