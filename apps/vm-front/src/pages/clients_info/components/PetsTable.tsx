import { DownloadIcon } from '../../../assets/icons/DownloadIcon';
import { EditIcon } from '../../../assets/icons/EditIcon';
import { EllipsisVertical } from '../../../assets/icons/EllipsisVertical';
import { Td, Th, TableActionBtn } from '../../../components';
import { Pet } from '../../../types';

interface PetsTableProps {
  pets: Array<Pet>;
}

export const PetsTable: React.FC<PetsTableProps> = ({ pets }) => {
  return (
    <div className=' bg-light rounded-lg py-4 mt-4'>
      <div className='flex items-center mt-2'>
        <h2 className='text-xl font-bold mx-4'>Mascotas</h2>
        <span className='rounded-2xl bg-primary font-semibold text-light px-4'>{pets.length}</span>
      </div>
      <table className='w-full mt-1'>
        <thead>
          <tr className='text-left'>
            <Th>Nombre</Th>
            <Th>Especie</Th>
            <Th>Raza</Th>
            <Th>Edad</Th>
            <Th>Historia Clinica</Th>
            <Th>Opciones</Th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr className=' border-b border-secondary' key={pet.name}>
              <Td>{pet.name}</Td>
              <Td>{pet.species}</Td>
              <Td>{pet.breed}</Td>
              <Td>{pet.birthday}</Td>
              <Td>
                <TableActionBtn><EditIcon className='size-5' /></TableActionBtn>
                <TableActionBtn><DownloadIcon className='size-5' /></TableActionBtn>
              </Td>
              <Td className='text-left'>
                <button><EllipsisVertical /></button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
