import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { clientsList } from '../../../mocks/Clients';
import { EllipsisVertical } from '../../../assets/icons/EllipsisVertical';

export const ClientList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const { data } = useInfiniteQuery({
    queryKey: ['clients', searchQuery],
    queryFn: () => clientsList,
    initialPageParam: 1,
    getNextPageParam: () => 1
  })

  const clients = data?.pages.flatMap(page => page) ?? []

  return (
    <div>
      {clients.map((client) => (
        <div className=' flex justify-between border-b border-secondary px-2'>
          <div>
            <p>{client.name}</p>
            <p>{client.dni}</p>
          </div>
          <div className='flex items-center'>
            <button className=' p-1'><EllipsisVertical className='text-dark size-6' /></button>
          </div>
        </div>
      ))}
    </div>
  );
}