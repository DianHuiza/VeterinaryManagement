import { useQuery } from '@tanstack/react-query'

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
      <div className='min-h-full flex items-center justify-center'>{data?.message ?? 'Loading...'}</div>
    </>
  )
}