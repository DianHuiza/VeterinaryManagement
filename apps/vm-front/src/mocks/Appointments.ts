import { AppointmentDetail } from '../types';

export const appointments: AppointmentDetail[] = [
  {
    id: 'random-uuid1',
    reason: 'Presenta una tos constante y seca asi como dificultades al respirar',
    initDate: Date().toString(),
    endDate: Date().toString(),
    petId: 'pet-random-uuid1',
    pet: {
      id: 'pet-random-uuid1',
      name: 'Paco',
      client: {
        id: 'clientid-random-uuid1',
        dni: '03040572060',
        fullName: 'Pedrito Calvo',
        email: '',
        phone: '',
        address: '',
      }
    },
    serviceId: 'service-random-uuid1',
    service: {
      id: 'service-random-uuid1',
      name: 'Consulta General'
    },
    roomId: 'room-random-uuid1',
    room: {
      id: 'room-random-uuid1',
      color: '#0099ef',
      name: 'Consulta 1'
    }
  },
  {
    id: 'random-uuid2',
    reason: 'Presenta una tos constante y seca asi como dificultades al respirar',
    initDate: Date().toString(),
    endDate: Date().toString(),
    petId: 'pet-random-uuid1',
    pet: {
      id: 'pet-random-uuid1',
      name: 'Paco',
      client: {
        id: 'clientid-random-uuid1',
        dni: '03040572060',
        fullName: 'Pedrito Calvo',
        email: '',
        phone: '',
        address: '',
      }
    },
    serviceId: 'service-random-uuid1',
    service: {
      id: 'service-random-uuid1',
      name: 'Consulta General'
    },
    roomId: 'room-random-uuid1',
    room: {
      id: 'room-random-uuid1',
      color: '#0099ef',
      name: 'Consulta 1'
    }
  },
  {
    id: 'random-uuid3',
    reason: 'Presenta una tos constante y seca asi como dificultades al respirar',
    initDate: Date().toString(),
    endDate: Date().toString(),
    petId: 'pet-random-uuid1',
    pet: {
      id: 'pet-random-uuid1',
      name: 'Paco',
      client: {
        id: 'clientid-random-uuid1',
        dni: '03040572060',
        fullName: 'Pedrito Calvo',
        email: '',
        phone: '',
        address: '',
      }
    },
    serviceId: 'service-random-uuid1',
    service: {
      id: 'service-random-uuid1',
      name: 'Consulta General'
    },
    roomId: 'room-random-uuid1',
    room: {
      id: 'room-random-uuid1',
      color: '#0099ef',
      name: 'Consulta 1'
    }
  }
]