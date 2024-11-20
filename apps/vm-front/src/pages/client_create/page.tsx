import { Form } from '../../components/form/Form'
import { FormTitle } from '../../components/form/FormTitle'
import { Label } from '../../components/form/Label'
import { Input } from '../../components/form/Input'
import { FormField, RoundedButton } from '../../components'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { clientSchema } from '@vm/validation'
import { createClient } from '../../services/clients/create'

export const Component: React.FC = () => {
  // const queryClient = useQueryClient()
  // const mutation = useMutation({
  //   mutationFn: createClient,
  //   onMutate: (data) => {
  //     queryClient.cancelQueries({ queryKey: ['clients'] })
  //     const optimisticData = {
  //       ...data,
  //       id: crypto.randomUUID()
  //     }
  //     queryClient.setQueryData<InfiniteData<Client>>(['clients'], (old) => {
  //       if (!old) return [pages]
        
  //       return {
  //         ...old,
  //         pages: [
  //           [old.pages[0]]
  //         ]
  //       }
  //     })
  //   }
  // })
  
  const onSubmiHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newClient = clientSchema.parse(Object.fromEntries(formData.entries()))
    createClient(newClient)
  }
  
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className='bg-light p-4 rounded-lg w-96'>
        <Form controlOnSubmit onSubmit={onSubmiHandler}>
          <FormTitle title='Agregar Mascota' />
          <FormField>
            <Label>Nombre</Label>
            <Input type='text' name='fullName' />
          </FormField>
          <FormField>
            <Label>DNI</Label>
            <Input type='text' name='dni'/>
          </FormField>
          <FormField>
            <Label>Correo</Label>
            <Input type='email' name='email' />
          </FormField>
          <FormField>
            <Label>Telefono</Label>
            <Input type='text' name='phone' />
          </FormField>
          <FormField>
            <Label>Direccion</Label>
            <Input type='text' name='address'/>
          </FormField>
          <div className=''>
            <RoundedButton className='w-full bg-primary text-light hover:bg-dark'>
              Crear
            </RoundedButton>
          </div>
        </Form>
      </div>
    </div>
  )
}