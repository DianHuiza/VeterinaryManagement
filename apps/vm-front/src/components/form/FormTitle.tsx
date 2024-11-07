interface FormTitleProps {
  title: string
}
 
export const FormTitle: React.FC<FormTitleProps> = ({ title }) => {
  return (
    <h2 className='text-center text-2xl font-bold'>{title}</h2>
  );
}
