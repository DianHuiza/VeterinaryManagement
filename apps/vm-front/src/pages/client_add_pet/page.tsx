import { useParams } from 'react-router-dom'
import { Form, FormField, FormTitle, Input, Label, RoundedButton } from '../../components'
import { createPet } from '../../services/pet/create'
import { petSchema } from '../../utils/validations/pet'

export const Component = () => {
  const {id = ''} = useParams()
  
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const petDataObject = Object.fromEntries(formData.entries())
    const newPet = petSchema.parse({ ...petDataObject, clientId: id })
    console.log(newPet)
    createPet(newPet)
    console.log('se creo?')
  }
  return (
    <div className='flex flex-1 items-center justify-center h-full'>
      <div className='bg-light p-4 rounded-lg w-96'>
        <Form controlOnSubmit onSubmit={onSubmitHandler}>
          <FormTitle title='Agregar Mascota' />
          <FormField>
            <Label>Nombre</Label>
            <Input type='text' name='name' />
          </FormField>
          <FormField>
            <Label>Especie</Label>
            <Input type='text' name='species' />
          </FormField>
          <FormField>
            <Label>Raza</Label>
            <Input type='text' name='breed' />
          </FormField>
          <FormField>
            <Label>Sexo</Label>
            <Input type='text' name='genre' />
          </FormField>
          <FormField>
            <Label>Fecha de Nacimiento</Label>
            <Input type='date' name='birthday' />
          </FormField>
          <div className='mt-6'>
            <RoundedButton className='w-full text-light text-md font-semibold bg-primary hover:bg-dark' type='submit'>
              Agregar
            </RoundedButton>
          </div>
        </Form>
      </div>
    </div>
  )
}