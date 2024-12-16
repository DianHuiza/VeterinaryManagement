import { Th } from '../../../components';
import { Pet } from '../../../types';
import { PetRow } from './PetRow';

interface PetsTableProps {
  pets: Array<Pet>;
}

export const PetsTable: React.FC<PetsTableProps> = ({ pets }) => {
  return (
    <div className=' bg-light rounded-lg py-4 mt-4'>
      <div className='flex items-center mt-2'>
        <h2 className='text-xl font-bold ml-4 mr-2'>Mascotas</h2>
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
            <PetRow pet={pet} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
