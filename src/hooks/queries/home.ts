import { useQuery } from 'react-query';
import { getHomeProducts, HomeQueryPayload } from 'utils/home';
import { HOME } from 'constants/urls';

export const useHomeProducts = (initialData: HomeQueryPayload) => {
  return useQuery<HomeQueryPayload>(HOME, getHomeProducts, { initialData });
};
