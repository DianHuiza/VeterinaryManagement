import { EllipsisVertical } from '../../../assets/icons/EllipsisVertical';
import { Dropdown, DropdownItem } from '../../../components';

interface ClientOptionsDropdownProps {
  clientId: string
}
 
export const ClientOptionsDropdown: React.FC<ClientOptionsDropdownProps> = ({ clientId }) => {
  return (
    <Dropdown 
      className='bg-light'
      trigger={<button className=' p-1'><EllipsisVertical className='text-dark size-6' /></button>}
    >
      <DropdownItem>
        <button>Agregar Mascota</button>
      </DropdownItem>
      <DropdownItem>
        <button>Editar</button>
      </DropdownItem>
      <DropdownItem>
        <button>Eliminar</button>
      </DropdownItem>
    </Dropdown>
  );
}