interface FlatButtonProps {
  children: React.ReactNode
  colorClass: string
}
 
export const FlatButton: React.FC<FlatButtonProps> = ({ children, colorClass }) => {
  return (
    <button className={`rounded-lg py-1 px-3 font-semibold transition-all duration-200 ease-in ${colorClass}`}>
      {children}
    </button>
  );
}