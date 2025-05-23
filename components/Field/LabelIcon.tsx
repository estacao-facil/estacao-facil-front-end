import { twMerge } from "tailwind-merge"

import { FieldLabelIconProps } from "@/types"

import { useFieldContext } from "@/contexts/FieldContext"

const LabelIcon = ({ icon: Icon, ...rest }: FieldLabelIconProps) => {
  const { fieldName, fieldErrors } = useFieldContext()

  return (
    <label
      {...rest}
      className={twMerge(
        "text-icon-500 cursor-pointer",
        fieldErrors ? "text-error-300" : "",
        rest.className ?? "",
      )}
      htmlFor={fieldName}
    >
      <Icon className="size-5" />
    </label>
  )
}

export default LabelIcon
