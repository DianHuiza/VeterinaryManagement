import { NavLink, NavLinkProps } from 'react-router-dom';

export const AppointmentNavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <NavLink 
      {...props}
      style={({ isActive }) => ({ backgroundColor: isActive ? '#fefefe' : '#cecfd0' })}
      className='px-4 py-1 rounded-3xl'
    >
      {children}
    </NavLink>
  )
}