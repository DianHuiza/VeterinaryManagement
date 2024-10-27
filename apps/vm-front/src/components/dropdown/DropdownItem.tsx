interface DropdownItemProps {
  children: React.ReactNode
}
 
export const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return (
    <div className='py-2 px-4 cursor-pointer border-b border-secondary'>{children}</div>
  );
}