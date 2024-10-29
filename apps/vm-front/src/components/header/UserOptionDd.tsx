import { Dropdown } from '../dropdown/Dropdown';
import { DropdownItem } from '../dropdown/DropdownItem';
 
export const UserOptionsDd: React.FC = () => {
  return (
    <Dropdown 
      trigger={<button className=' font-semibold border rounded-2xl border-white py-1 px-4'>Usuario Prueba</button>}
      className='mt-4 rounded-lg bg-primary'
    >
      <DropdownItem>
        Juan Garcia
      </DropdownItem>
      <DropdownItem>Opciones</DropdownItem>
      <DropdownItem>Cerrar sesión</DropdownItem>
    </Dropdown>
  );
}
