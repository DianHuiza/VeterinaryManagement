export const Label: React.FC<React.HTMLAttributes<HTMLLabelElement>> = ({children, className}) => {
  return(
    <label className={`${className}`}>{children}</label>
  )
}