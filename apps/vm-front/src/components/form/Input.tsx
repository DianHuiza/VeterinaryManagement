export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({className, ...props}) => {
  return (
    <input className={`${className} border-primary border-2 rounded-lg px-2 py-1 `} {...props}/>
  )
}
