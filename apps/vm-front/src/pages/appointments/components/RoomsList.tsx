import { useQuery } from '@tanstack/react-query';
import RoomInfo from './RoomInfo';

const rooms = [
  {
    name: 'Consulta 1',
    currentEmployee: {
      name: 'Juan Ramon Rayo' 
    },
    currentPet: {
      name: 'Pedro'
    },
    status: "OCUPADA"
  },
  {
    name: 'Consulta 2',
    status: "INACTIVA"
  },
  {
    name: 'Consulta 1',
    currentEmployee: {
      name: 'Pedro Hernandez Fernandez' 
    },
    status: "LIBRE"
  },
]

export const RoomsList: React.FC = () => {
  const {data} = useQuery({
    queryKey: ['rooms'],
    queryFn: () => rooms
  })
  return (
    <div className=' bg-light rounded-lg p-4'>
      <span className='text-xl'> Salas </span>
      <div className='mt-4'>
        {data?.map((room) => (
          <RoomInfo name={room.name} currentPet={room.currentPet?.name} currentEmployee={room.currentEmployee?.name} status={room.status} />
        ))}
      </div>
    </div>
  );
}
