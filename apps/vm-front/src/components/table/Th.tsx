export const Th: React.FC<React.ComponentPropsWithoutRef<'th'>> = ({ children, className, ...props }) => {
  return (
    <th className={`py-2 px-4 ${className}`} {...props}>{children}</th>
  );
}
