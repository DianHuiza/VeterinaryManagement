interface RoomInfoProps {
  name: string
  currentEmployee?: string
  currentPet?: string
  status: 'INACTIVA' | 'OCUPADA' | 'LIBRE'
}

const statusStyle = {
  INACTIVA: ' bg-secondary text-light',
  OCUPADA: ' bg-dark text-light',
  LIBRE: ' bg-primary text-light'
}

const RoomInfo: React.FC<RoomInfoProps> = ({ name, currentEmployee, currentPet, status}) => {
  return (
    <div className=' border-t border-secondary mb-4 py-2'>
      <div className='flex justify-between'>
        <span className='font-bold'>{name}</span>
        <span className={`text-sm ${statusStyle[status]} py-1 px-3 rounded-2xl font-semibold`}>{status}</span>
      </div>
      <p>{currentEmployee}</p>
      <p>{currentPet}</p>
    </div>
  );
}
 
export default RoomInfo;