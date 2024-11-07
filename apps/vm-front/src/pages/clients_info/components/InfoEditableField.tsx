import { useEffect, useRef, useState } from 'react'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { XMarkIcon } from '../../../assets/icons/XMarkIcon'

interface InfoEditableFieldProps {
  labelContent: JSX.Element
  content?: string
  type: string
  id: string
  name: string
}

const InfoEditableField: React.FC<InfoEditableFieldProps> = ({ labelContent, content, type, id, name }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditable && inputRef.current){
      inputRef.current?.focus()
    }
  },[isEditable])

  return (
    <div className=''>
      <form className=' group flex items-center gap-2 relative w-max'>
        <label htmlFor="">{labelContent}</label>
        {isEditable ? (
          <input className='min-w-40 px-2 py-1 focus:outline-none' ref={inputRef} type={type} id={id} name={name} defaultValue={content}/>
        ): (
          <span className='inline-block min-w-40 px-2 py-1'>{content}</span>
          ) 
        }
        <span className={`${isEditable ? 'inline' : 'group-hover:inline hidden'} `}>
          <button type='button' onClick={() => setIsEditable(curr => !curr)} className='rounded-md bg-primary text-light'>
            {isEditable ? <XMarkIcon /> :  <EditIcon />}
          </button>
          {isEditable && <button type='submit' className='ml-2 rounded-md bg-primary text-light'><CheckIcon /></button>}
        </span>
      </form>
    </div>
  );
}

export default InfoEditableField;