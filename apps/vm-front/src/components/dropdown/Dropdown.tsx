import { useState } from 'react'

interface DropdownProps {
  children: React.ReactNode
  text: string
  className?: string
}
 
export const Dropdown: React.FC<DropdownProps> = ({ children, text, className = ''}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div onClick={handleClick} className='relative'>
      <button className={className}>{text}</button>
      <div className={`${isOpen ? '' : 'hidden'} min-w-max absolute right-0 shadow-lg rounded-md overflow-hidden bg-primary text-white z-10`}>
        {children} 
      </div>
    </div>
  );
}
