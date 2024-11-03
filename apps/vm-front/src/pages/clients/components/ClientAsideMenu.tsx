import { ClientList } from './ClientList'
import { SearchBar } from './SearchBar'

export const ClientAsideMenu: React.FC = () => {
  return (
    <div className='bg-light min-w-96 h-full'>
      <SearchBar />
      <ClientList />
    </div>
  )
}