import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getClientsListedNames } from '../../../services/clients/getListedNames';
import { ClientListItem } from './ClientListItem';

export const ClientList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const { data } = useInfiniteQuery({
    queryKey: ['clients', searchQuery],
    queryFn: ({pageParam}) => getClientsListedNames(searchQuery, pageParam),
    initialPageParam: 0,
    getNextPageParam: () => 0
  })

  const clients = data?.pages.flatMap(page => page) ?? []

  return (
    <div>
      {clients.map((client) => (
        <ClientListItem client={client} />
      ))}
    </div>
  );
}