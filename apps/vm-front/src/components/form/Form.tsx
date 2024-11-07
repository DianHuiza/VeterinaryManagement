import { useRef } from 'react'

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  controlOnSubmit: boolean
}

export const Form: React.FC<FormProps> = ({children, onSubmit, controlOnSubmit , ...props}) => {
  const isFetching = useRef<boolean>(false)
  
  const onSubmitHandler:React.FormEventHandler<HTMLFormElement> = async(e) => {
    if (isFetching.current && controlOnSubmit) return
    
    isFetching.current = true
    await onSubmit?.(e)
    isFetching.current = false
  }  
  return(
    <form onSubmit={onSubmitHandler} {...props} >
      {children}
    </form>
  )
}