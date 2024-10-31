import { Link, LinkProps } from 'react-router-dom';
 
export const HeaderLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className='text-light text-center inline-block min-w-28 px-4 py-2 rounded-md transition-colors duration-200 ease-in hover:bg-dark'>
      {children}
    </Link>
  );
}
