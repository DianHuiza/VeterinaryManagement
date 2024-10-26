import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className=' flex items-center px-4 py-2'>
      <div className='flex-1'>CVDC</div>
      <nav className=''>
        <ul className=' flex gap-5'>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/patient">Turnos</Link>
          </li>
          <li>
            <Link to="/doctor">Clientes</Link>
          </li>
        </ul>
      </nav>
      <div className='flex-1'>

      </div>
    </header>
  );
}