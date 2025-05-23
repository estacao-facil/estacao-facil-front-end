import { invalidEmailMessage } from "./errorMessage"

export const validEmail = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: invalidEmailMessage,
  },
}
