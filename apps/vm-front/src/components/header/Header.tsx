import { HeaderLink } from './HeaderLink';
import { UserOptionsDd } from './UserOptionDd';

export const Header: React.FC = () => {
  return (
    <header className=' fixed w-screen flex items-center px-4 py-4 bg-primary text-light'>
      <div className='flex-1 text-2xl font-semibold'>CVDC</div>
      <nav className=''>
        <ul className=' flex font font-semibold'>
          <li>
            <HeaderLink to="/">Dashboard</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/appointment">Turnos</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/clients">Clientes</HeaderLink>
          </li>
        </ul>
      </nav>
      <div className='flex-1 flex justify-end items-center'>
        <UserOptionsDd />
      </div>
    </header>
  );
}