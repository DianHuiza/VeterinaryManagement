export const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = ({className, ...props}) => {
  return (
    <input className={`${className}`} {...props}/>
  )
}
