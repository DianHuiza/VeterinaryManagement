import { Dropdown } from '../dropdown/Dropdown';
import { DropdownItem } from '../dropdown/DropdownItem';
 
export const UserOptionsDd: React.FC = () => {
  return (
    <Dropdown className=' font-semibold border rounded-2xl border-white py-1 px-4' text='Juan Garcia'>
      <DropdownItem>
        Juan Garcia
      </DropdownItem>
      <DropdownItem>Opciones</DropdownItem>
      <DropdownItem>Cerrar sesión</DropdownItem>
    </Dropdown>
  );
}
