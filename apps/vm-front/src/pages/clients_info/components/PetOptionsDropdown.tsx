import { EllipsisVertical } from '../../../assets/icons/EllipsisVertical';
import { Dropdown, DropdownItem } from '../../../components';

export const PetOptionDropdown: React.FC = () => {
  return (
    <Dropdown className='bg-light' trigger={<button><EllipsisVertical /></button>}>
      <DropdownItem><button>Editar</button></DropdownItem>
      <DropdownItem><button>Eliminar</button></DropdownItem>
    </Dropdown>
  );
}