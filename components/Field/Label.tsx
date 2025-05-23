import { twMerge } from "tailwind-merge"

import { FieldLabelProps } from "@/types"

import { useFieldContext } from "@/contexts/FieldContext"

const Label = ({ children, ...rest }: FieldLabelProps) => {
  const { fieldName, fieldErrors } = useFieldContext()

  return (
    <label
      {...rest}
      htmlFor={fieldName}
      className={twMerge(
        "cursor-pointer font-bold",
        fieldErrors ? "text-error-300" : "",
        rest.className ?? "",
      )}
    >
      {children}
    </label>
  )
}

export default Label
