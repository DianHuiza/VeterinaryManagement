interface SolidButtonProps {
  children: React.ReactNode
  colorClass: string
}
 
export const SolidButton: React.FC<SolidButtonProps> = ({ children, colorClass }) => {
  return (
    <button className={`rounded-lg py-1 px-3 font-semibold transition-all duration-200 ease-in ${colorClass}`}>
      {children}
    </button>
  );
}