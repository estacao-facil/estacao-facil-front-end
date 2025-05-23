import { twMerge } from "tailwind-merge"

import { CheckboxWrapperProps } from "@/types"

import { useFieldContext } from "@/contexts/FieldContext"

const CheckboxWrapper = ({ children, ...rest }: CheckboxWrapperProps) => {
  const { fieldName } = useFieldContext()

  return (
    <label
      htmlFor={fieldName}
      className={twMerge("flex items-center gap-2", rest.className ?? "")}
    >
      {children}
    </label>
  )
}

export default CheckboxWrapper
