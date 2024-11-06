export const TableActionBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={` text-light bg-primary rounded-lg p-1 ${className}`} {...props}>
      {children}
    </button>
  );
}
