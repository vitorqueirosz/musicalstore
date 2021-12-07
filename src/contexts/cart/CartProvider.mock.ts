import { QUERY_PRODUCTS } from 'graphql/queries/search';
import { MAX_PRODUCTS } from './CartProvider';

export const apolloCartMock = [
  {
    request: {
      query: QUERY_PRODUCTS,
      variables: { where: { id: ['1', '2'] }, limit: MAX_PRODUCTS },
    },
    result: {
      data: {
        products: [
          {
            id: '1',
            name: 'BATERIA INFANTIL PREMIUM DX35J BK PRETA',
            price: 'R$ 1.599,90',
            images: [
              {
                url: '/uploads/BATERIA_INFANTIL_PRE_9f1f70b7de.jpg',
                __typename: 'UploadFile',
              },
              {
                url: '/uploads/BATERIA_INFANTIL_PRE_ef551d25db.jpg',
                __typename: 'UploadFile',
              },
            ],
            __typename: 'Products',
          },
          {
            id: '2',
            name: 'BATERIA BK PRETA',
            price: 'R$ 1.200,90',
            images: [
              {
                url: '/uploads/BATERIA_PRE_9f1f70b7de.jpg',
                __typename: 'UploadFile',
              },
              {
                url: '/uploads/BATERIA_PRE_ef551d25db.jpg',
                __typename: 'UploadFile',
              },
            ],
            __typename: 'Products',
          },
        ],
      },
    },
  },
];

export const productsMocked = [
  {
    id: '1',
    name: 'BATERIA INFANTIL PREMIUM DX35J BK PRETA',
    price: 'R$ 1.599,90',
    image: 'http://localhost:1337/uploads/BATERIA_INFANTIL_PRE_9f1f70b7de.jpg',
  },
  {
    id: '2',
    name: 'BATERIA BK PRETA',
    price: 'R$ 1.200,90',
    image: 'http://localhost:1337/uploads/BATERIA_PRE_9f1f70b7de.jpg',
  },
];
