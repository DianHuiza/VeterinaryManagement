import { useNavigate } from 'react-router-dom'
import { ClientListed } from '../../../types'
import { ClientOptionsDropdown } from './ClientOptionDropdown'

interface ClientListItemProps {
  client: ClientListed
}

export const ClientListItem: React.FC<ClientListItemProps> = ({ client }) => {
  const navigate = useNavigate()
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    navigate(`info/${client.id}`)
  }
  return (
    <div className=' flex justify-between border-b border-secondary px-2' onClick={handleClick} >
      <div>
        <p>{client.fullName}</p>
        <p>{client.dni}</p>
      </div>
      <div className='flex items-center'>
        <ClientOptionsDropdown clientId={client.id} />
      </div>
    </div>
  )
}