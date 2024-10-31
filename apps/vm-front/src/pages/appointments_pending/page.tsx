import { useInfiniteQuery } from '@tanstack/react-query'
import { appointments } from '../../mocks/Appointments'
import { AppointmentsList } from '../../components'

export const Component = () => {
  const { data } = useInfiniteQuery({
    queryKey: ['appointment', 'today'],
    queryFn: () => appointments,
    initialPageParam: 1,
    getNextPageParam: () => 1
  })

  const pendingAppointments = data?.pages.flatMap(page => page) ?? []
  
  return (
    <AppointmentsList appointments={pendingAppointments} />
  )
}