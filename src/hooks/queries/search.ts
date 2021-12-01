import { QueryHookOptions, useQuery } from '@apollo/client';
import { SearchQueryPayload } from 'utils/search';
import { QUERY_PRODUCTS } from 'graphql/queries/search';

export const useSearchProducts = (options: QueryHookOptions) => {
  return useQuery<SearchQueryPayload>(QUERY_PRODUCTS, options);
};
