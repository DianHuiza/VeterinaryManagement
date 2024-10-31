export interface Employee {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  positionId: string;
  role: Role;
  deletedAt?: Date;
  currentRoom?: Room;
  appointments: Appointment[];
}

export interface Position {
  id: string;
  position: string;
  description: string;
  employees: Employee[];
}

export interface Client {
  id: string;
  dni: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  deletedAt?: Date;
}

export interface ClientWithPets extends Client {
  pets: Pet[];
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  roomId: string;
  appointments: Appointment[];
}

export interface Room {
  id: string;
  name: string;
  color: string
  roomTypeId: string;
  status?: RoomStatus;
  currentEmployeeId?: string;
  currentPetId?: string;
  maxAppointmentDuration: number;
  minAppointmentDuration: number;
  openAt: string;
  closeAt: string;
  outOfServiceAt?: Date;
  appointments: Appointment[];
}

export interface RoomType {
  id: string;
  name: string;
  services: Service[];
  rooms: Room[];
}

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  birthday: Date;
  clientId: string;
  deletedAt?: Date;
  medicalRecordPath?: string;
  appointments: Appointment[];
  currentRoom?: Room;
}

export interface PetWithClient extends Pet {
  client: Client
}

export interface Appointment {
  id: string;
  reason: string;
  initDate: string;
  endDate: string;
  petId: string;
  serviceId: string;
  roomId: string;
  servedById?: string;
  canceledAt?: Date;
}

export interface AppointmentDetail extends Appointment {
  pet: Pick<PetWithClient, 'id' | 'name' | 'client' >
  service: Pick<Service, 'id' | 'name'>
  room: Pick<Room, 'id' | 'color' | 'name'>
}

export interface Options {
  id: string;
  key: string;
  value: string;
  type: DataType;
}

export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}

export enum RoomStatus {
  INACTIVE = 'INACTIVE',
  OCUPED = 'OCUPED',
  FREE = 'FREE',
}

export enum DataType {
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
}
