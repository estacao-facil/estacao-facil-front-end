import { twMerge } from "tailwind-merge"

import { FieldTextInputWrapperProps } from "@/types"

import { useFieldContext } from "@/contexts/FieldContext"

const TextInputWrapper = ({
  children,
  ...rest
}: FieldTextInputWrapperProps) => {
  const { fieldName, fieldErrors } = useFieldContext()

  return (
    <label
      {...rest}
      htmlFor={fieldName}
      className={twMerge(
        "border-border-500 flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3",
        fieldErrors ? "border-error-300" : "",
        rest.className ?? "",
      )}
    >
      {children}
    </label>
  )
}

export default TextInputWrapper
