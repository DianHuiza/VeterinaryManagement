import { useState } from 'react'

interface DropdownProps {
  children: React.ReactNode
  trigger: JSX.Element
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleClick} className='relative w-max'>
      {trigger}
      {isOpen && (
        <div className={` min-w-max absolute right-0 shadow-lg rounded-lg overflow-hidden z-10 ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}
