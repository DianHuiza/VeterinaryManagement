type RoundedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const RoundedButton: React.FC<RoundedButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`rounded-lg py-1 px-3 font-semibold transition-all duration-200 ease-in ${className}`} {...props}>
      {children}
    </button>
  );
}
