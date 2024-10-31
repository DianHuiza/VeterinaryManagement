interface BordedButtonProps {
  children: React.ReactNode
  colorClass: string
}
 
export const BordedButton: React.FC<BordedButtonProps> = ({ children, colorClass }) => {
  return (
    <button className={`rounded-lg py-1 px-3 font-semibold transition-all duration-200 ease-in border-2 ${colorClass}`}>
      {children}
    </button>
  );
}