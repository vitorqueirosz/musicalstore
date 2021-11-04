import { SEARCH } from 'constants/urls';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';
import { getSearchProducts, SearchQueryPayload } from 'utils/search';

export const useSearchProducts = (
  initialData: SearchQueryPayload,
  query: ParsedUrlQuery,
) => {
  return useQuery<SearchQueryPayload>(SEARCH, () => getSearchProducts(query), {
    initialData,
  });
};
