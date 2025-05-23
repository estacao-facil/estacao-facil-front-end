import { twMerge } from "tailwind-merge"

import { useFormContext } from "@/contexts/FormContext"
import { useFieldContext } from "@/contexts/FieldContext"
import { RegisterOptions } from "react-hook-form"

export interface FieldSelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  validate?: RegisterOptions
}

const SelectInput = ({
  validate,
  children,
  ...rest
}: FieldSelectInputProps) => {
  const { register } = useFormContext()
  const { fieldName, fieldErrors } = useFieldContext()

  return (
    <select
      {...rest}
      id={fieldName}
      className={twMerge(
        "w-full grow outline-none",
        fieldErrors ? "placeholder-error-300 border-error-500" : "",
        rest.className ?? "",
      )}
      {...register(fieldName, validate)}
    >
      {children}
    </select>
  )
}

export default SelectInput
