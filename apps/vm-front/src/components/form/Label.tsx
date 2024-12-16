export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({children, className}) => {
  return(
    <label className={`${className}`}>{children}</label>
  )
}
