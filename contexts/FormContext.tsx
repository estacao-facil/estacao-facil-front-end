import { createContext, useContext } from "react"
import { FieldValues } from "react-hook-form"

import { FormContextProps } from "@/types"

export const FormContext = createContext<FormContextProps<FieldValues> | null>(
  null,
)

export const useFormContext = <TFormData extends FieldValues>() => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("useFormContext must be used within Form.Root")
  }

  return context as FormContextProps<TFormData>
}
