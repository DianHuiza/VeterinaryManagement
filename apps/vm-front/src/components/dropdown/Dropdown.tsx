import { useToggleShow } from '../../hooks/useToggleShow'

interface DropdownProps {
  children: React.ReactNode
  trigger: JSX.Element
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ children, trigger, className = '' }) => {
  const {isActive, toggleIsActive, ref} = useToggleShow<HTMLDivElement>();

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    toggleIsActive()
  }

  return (
    <div ref={ref} onClick={handleClick} className='relative w-max'>
      {trigger}
      {isActive && (
        <div className={` min-w-max absolute right-0 shadow-lg rounded-lg overflow-hidden z-10 ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}
