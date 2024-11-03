import { Td, Th } from '../../../components';
import { Pet } from '../../../types';

interface PetsTableProps {
  pets: Array<Pet>;
}
 
export const PetsTable: React.FC<PetsTableProps> = ({ pets }) => {
  return (
    <table className='w-full mt-4'>
      <thead className='bg-light rounded-lg'>
        <tr className='text-left'>
          <Th className='rounded-l-lg'>Nombre</Th>
          <Th>Especie</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th className='tounded-r-lg'>Historia Clinica</Th>
        </tr>       
      </thead>
      <tbody className='bg-light rounded-lg'>
        {pets.map((pet) => (
          <tr className='rounded-lg' key={pet.name}>
            <Td>{pet.name}</Td>
            <Td>{pet.species}</Td>
            <Td>{pet.breed}</Td>
            <Td>{pet.birthday}</Td>
            <Td c>{pet.medicalRecordPath}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
