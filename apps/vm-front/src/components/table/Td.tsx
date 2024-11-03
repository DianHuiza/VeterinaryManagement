export const Td: React.FC<React.ComponentPropsWithoutRef<'td'>> = ({ children, className, ...props }) => {
  return (
    <td className={`py-2 px-4 ${className}`} {...props}>{children}</td>
  );
}