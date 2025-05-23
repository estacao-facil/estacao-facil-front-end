export interface SingInFormData {
  email: string
  password: string
  rememberMe: boolean
}

export interface SingUpFormData {
  name: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface ForgotPasswordFormData {
  email: string
}

export interface ResetPasswordFormData {
  password: string
  newPassword: string
  confirmNewPassword: string
}

export interface UserProfileFormData {
  name: string
  lastName: string
  email: string
}

export interface SendMessageFormData {
  message: string
}

export interface RenameChatFormData {
  title: string
}
