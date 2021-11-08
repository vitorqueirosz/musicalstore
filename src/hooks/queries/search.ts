import { ENDPOINTS } from 'constants/endpoints';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';
import { getSearchProducts, SearchQueryPayload } from 'utils/search';

export const useSearchProducts = (
  initialData: SearchQueryPayload,
  query: ParsedUrlQuery,
) => {
  return useQuery<SearchQueryPayload>(
    [ENDPOINTS.SEARCH, Object.values(query)],
    async () => await getSearchProducts(query),
    {
      initialData,
    },
  );
};
