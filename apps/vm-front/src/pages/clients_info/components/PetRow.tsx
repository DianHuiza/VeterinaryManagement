import dayjs from 'dayjs';
import { DownloadIcon } from '../../../assets/icons/DownloadIcon';
import { EditIcon } from '../../../assets/icons/EditIcon';
import { TableActionBtn, Td } from '../../../components';
import { Pet } from '../../../types';
import { PetOptionDropdown } from './PetOptionsDropdown';

interface PetRowProps {
  pet: Pet;
}

export const PetRow: React.FC<PetRowProps> = ({ pet }) => {
  const age = dayjs().diff(dayjs(pet.birthday), 'month');
  return (
    <tr className=' border-b border-secondary' key={pet.id}>
      <Td>{pet.name}</Td>
      <Td>{pet.species}</Td>
      <Td>{pet.breed}</Td>
      <Td>{age > 0 ? `${age} meses` : '<1 mes'}</Td>
      <Td>
        <div className='flex gap-2 items-center'>
          <TableActionBtn className='flex items-center'><EditIcon className='size-5' /> Ir al Editor</TableActionBtn>
          <TableActionBtn><DownloadIcon className='size-5' /></TableActionBtn>
        </div>
      </Td>
      <td className='text-left'>
        <PetOptionDropdown />
      </td>
    </tr>
  );
}
