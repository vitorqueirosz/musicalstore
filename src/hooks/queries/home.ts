import { ENDPOINTS } from 'constants/endpoints';
import { useQuery } from 'react-query';
import { getHomeProducts, HomeQueryPayload } from 'utils/home';

export const useHomeProducts = (initialData: HomeQueryPayload) => {
  return useQuery<HomeQueryPayload>(ENDPOINTS.HOME, getHomeProducts, {
    initialData,
  });
};
