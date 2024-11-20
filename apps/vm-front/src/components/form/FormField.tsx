interface FormFieldProps {
  children: React.ReactNode
}
export const FormField: React.FC<FormFieldProps> = ({ children }) => {
  return(
    <div className='mb-4 flex flex-col'>
      {children}
    </div>
  )
}