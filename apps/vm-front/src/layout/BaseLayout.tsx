import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
 
const BaseLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
 
export default BaseLayout;