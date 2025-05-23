import { FieldContextProps } from "@/types/field"
import { createContext, useContext } from "react"
import { FieldValues } from "react-hook-form"

export const FieldContext =
  createContext<FieldContextProps<FieldValues> | null>(null)

export const useFieldContext = <TFormData extends FieldValues>() => {
  const context = useContext(FieldContext)

  if (!context)
    throw new Error("useFieldContext must be used within Field.Root")

  return context as FieldContextProps<TFormData>
}
