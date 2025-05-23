import { StaticImageData } from "next/image"
import { SetStateAction } from "react"

export * from "./field"
export * from "./formData"
export * from "./form"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export interface ChatListItemProps {
  url: string
  title: string
}

export type ProductImageType = {
  src: string
  width: number
  height: number
}

export type ProductImagesType = {
  sm: ProductImageType
  md: ProductImageType
  lg: ProductImageType
}

export type FeatureType = {
  Icon: React.ElementType
  title: string
  description: string
}

export type Question = {
  question: string
  response: React.ReactNode
}

export type AccordionProps = {
  title: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export type NavLinkType = {
  label: string
  url: string
}

export type ChatListItemType = {
  url: string
  title: string
}

export interface RawChat {
  id: number
  code: string
  title: string
  creation_date: string
  user_id: number
}

export interface ChatMessageProps {
  agent: "cecilia" | "user"
  content: string | React.ReactNode
}

export interface DevCardProps {
  name: string
  rm: string
  classRoom: string
  position: string
  github: string
  linkedin: string
  devPhoto: StaticImageData
}

export interface LoggedInMessageResponse {
  id: number
  send_date: string
  content: string
  reply: string
  chat_id: number
}

export interface LoggedOutMessageResponse {
  content: string
  reply: string
  context: Record<string, unknown>
}

export interface SignInRequestData {
  email: string
  password: string
}

export interface SignInResponseData {
  access_token: string
  token_type: string
  user: User
}

export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
}

export interface RawMessage {
  id: number
  send_date: string
  content: string
  reply: string
  chat_id: number
}

export interface ChatMessageType {
  agent: "user" | "cecilia"
  content: string
}

export interface ChatContextType {
  sideMenu: boolean
  toggleSideMenu: () => void
  waitingReply: boolean
  setWaitingReply: React.Dispatch<React.SetStateAction<boolean>>
  messages: ChatMessageType[] | null
  setMessages: React.Dispatch<React.SetStateAction<ChatMessageType[] | null>>
  context: Record<string, unknown>
  setContext: React.Dispatch<React.SetStateAction<Record<string, unknown>>>
  chats: ChatType[] | null
  setChats: React.Dispatch<React.SetStateAction<ChatType[] | null>>
}

export interface ChatType {
  url: string
  title: string
}

export interface SignInData {
  email: string
  password: string
}

export interface AuthContextType {
  user: User | null | undefined
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  logout: () => void
}

export interface StationType {
  id: number
  nome: string
  horaAbertura: string
  horaFechamento: string
  linha: string
}

export interface AlertType {
  id: number
  titulo: string
  descricao: string
  dataInicio: string
  dataFim: string
  gravidade: number
  idEstacao: number
  estacao: string
}

export interface NewAlertDialogProps {
  closeFunction: () => void
}

export interface CreateAlertFormData {
  title: string
  description: string
  startDate: string
  endDate?: string
  severity: number
  stationId: number
}

export interface AlertsContextType {
  stations: Record<number, StationType>
  setStations: React.Dispatch<SetStateAction<Record<number, StationType>>>
  alerts: Record<number, AlertType>
  setAlerts: React.Dispatch<SetStateAction<Record<number, AlertType>>>
}

export interface EditAlertDialogProps {
  closeFunction: () => void
  alert: AlertType
}

export interface EditAlertFormData {
  title: string
  description: string
  startDate: string
  endDate?: string
  severity: number
  stationId: number
}
