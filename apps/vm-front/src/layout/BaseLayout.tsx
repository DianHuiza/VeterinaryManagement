import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
 
const BaseLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen box-border pt-16'>
        <Outlet />
      </div>
    </>
  );
}
 
export default BaseLayout;