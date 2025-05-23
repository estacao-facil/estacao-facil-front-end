import { twMerge } from "tailwind-merge"

import { FieldTextInputProps } from "@/types/field"

import { useFormContext } from "@/contexts/FormContext"
import { useFieldContext } from "@/contexts/FieldContext"

const TextInput = ({
  type = "text",
  placeholder,
  validate,
  ...rest
}: FieldTextInputProps) => {
  const { register } = useFormContext()
  const { fieldName, fieldErrors } = useFieldContext()

  return (
    <input
      {...rest}
      id={fieldName}
      type={type}
      placeholder={placeholder}
      className={twMerge(
        "w-full grow outline-none",
        fieldErrors ? "placeholder-error-300" : "",
        rest.className ?? "",
      )}
      {...register(fieldName, validate)}
    />
  )
}

export default TextInput
