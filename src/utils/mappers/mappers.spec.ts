import { HomeProps } from 'templates';
import { HomeQueryPayload } from 'utils/home';
import { homeMapper } from '.';

describe('homeMapper()', () => {
  it('should return the data correctly', () => {
    const product = {
      name: 'product',
      price: '5',
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
          products: [product],
        },
        releases: {
          title: 'title',
          products: [product],
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
