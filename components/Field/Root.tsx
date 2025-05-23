import { FieldError } from "react-hook-form"
import { twMerge } from "tailwind-merge"

import { FieldRootProps } from "@/types/field"

import { useFormContext } from "@/contexts/FormContext"
import { FieldContext } from "@/contexts/FieldContext"

const Root = <TFormData extends Record<string, unknown>>({
  children,
  fieldName,
  ...rest
}: FieldRootProps<TFormData>) => {
  const { errors } = useFormContext<TFormData>()
  const fieldErrors = errors[fieldName as keyof typeof errors] as
    | FieldError
    | undefined

  return (
    <FieldContext.Provider
      value={{
        fieldName,
        fieldErrors,
      }}
    >
      <div
        {...rest}
        className={twMerge("flex flex-col gap-2", rest.className ?? "")}
      >
        {children}
      </div>
    </FieldContext.Provider>
  )
}

export default Root
