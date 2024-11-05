export const TableActionBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children }) => {
  return (
    <button className=' text-light bg-primary rounded-lg p-1'>
      {children}
    </button>
  );
}
