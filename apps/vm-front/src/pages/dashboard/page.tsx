import { useQuery } from '@tanstack/react-query'
import { Header } from '../../components/header/Header'

export const Component = () => {
  const {data} = useQuery({
    queryKey: ['api'],
    queryFn: async ()=> {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api`)
      return await res.json()
    }
  })
  return (
    <>
      <Header/>
      <div className=' flex items-center justify-center h-screen'>{data?.message ?? 'Loading...'}</div>
    </>
  )
}