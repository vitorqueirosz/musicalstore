import { ENDPOINTS } from 'constants/endpoints';
import { useQuery } from 'react-query';
import {
  getSearchProducts,
  QueryProps,
  SearchQueryPayload,
} from 'utils/search';

type SearchProductProps = {
  query: QueryProps;
  initialData?: SearchQueryPayload;
  skip?: boolean;
};

export const useSearchProducts = ({
  query,
  initialData,
  skip,
}: SearchProductProps) => {
  return useQuery<SearchQueryPayload>(
    [ENDPOINTS.SEARCH, Object.values(query)],
    async () => await getSearchProducts(query, skip),
    {
      initialData,
    },
  );
};
