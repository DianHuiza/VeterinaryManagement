import { useRef } from 'react'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { XMarkIcon } from '../../../assets/icons/XMarkIcon'
import { ZodSchema } from 'zod'
import { useToggleShow } from '../../../hooks/useToggleShow'

interface InfoEditableFieldProps {
  labelContent: JSX.Element
  content?: string
  type: string
  id: string
  name: string
  editFn: (...props: any) => Promise<any>
  validationSchema?: ZodSchema
}

export const InfoEditableField: React.FC<InfoEditableFieldProps> = ({ labelContent, editFn, validationSchema, content = '', type, id, name }) => {
  const {isActive, toggleIsActive, setIsActive: setIsEditable, ref: divRef} = useToggleShow<HTMLDivElement>() 
  const inputRef = useRef<HTMLInputElement>(null)

  const cancelHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (inputRef.current) {
      if (isActive) {
        inputRef.current.value = content
      }else{
        inputRef.current.focus()
      }
      toggleIsActive() 
    }
  }

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formObject = Object.fromEntries(new FormData(e.currentTarget).entries())
    const editedField = validationSchema ? validationSchema.parse(formObject) : formObject
    editFn(editedField).then(() => {
      setIsEditable(false)
    }).catch(err => {
      console.log(err)
    })
    console.log(editedField)
  }
  console.log(isActive)

  return (
    <div className='' >
      <form  onSubmit={submitHandler} className=' group flex items-center gap-2 relative w-max'>
        <label htmlFor="">{labelContent}</label>
        <input className='min-w-40 px-2 py-1 focus:outline-none truncate' ref={inputRef} type={type} id={id} name={name} defaultValue={content} readOnly={!isActive}/>
        <div ref={divRef} className={`${isActive ? 'inline' : 'group-hover:inline hidden'} `}>
          <button type='button' onClick={cancelHandler} className='rounded-md bg-primary text-light'>
            {isActive ? <XMarkIcon /> :  <EditIcon />}
          </button>
          {isActive && <button type='submit' className='ml-2 rounded-md bg-primary text-light'><CheckIcon /></button>}
        </div>
      </form>
    </div>
  );
}
