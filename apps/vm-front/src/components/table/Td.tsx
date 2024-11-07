export const Td: React.FC<React.ComponentPropsWithoutRef<'td'>> = ({ children, className, ...props }) => {
  return (
    <td className={`py-2 px-4 truncate ${className}`} {...props}>{children}</td>
  );
}