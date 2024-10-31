import { useInfiniteQuery } from '@tanstack/react-query'
import { AppointmentsList } from '../../components'
import { appointments } from '../../mocks/Appointments'

export const Component = () => {
  const { data } = useInfiniteQuery({
    queryKey: ['appointment', 'today'],
    queryFn: () => appointments,
    initialPageParam: 1,
    getNextPageParam: () => 1
  })

  const todayAppointments = data?.pages.flatMap(page => page) ?? []

  return (
    <AppointmentsList canServe appointments={todayAppointments} />
  )
}