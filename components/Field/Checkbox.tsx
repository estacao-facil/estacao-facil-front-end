import { Check } from "lucide-react"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { useFormContext } from "@/contexts/FormContext"
import { useFieldContext } from "@/contexts/FieldContext"

const Checkbox = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { register } = useFormContext()
  const { fieldName } = useFieldContext()

  const [checked, setChecked] = useState(false)

  return (
    <label htmlFor={fieldName}>
      <input
        id={fieldName}
        type="checkbox"
        checked={checked}
        className="hidden"
        {...register(fieldName)}
        onChange={(e) => {
          setChecked(e.target.checked)
          register(fieldName).onChange(e)
        }}
      />

      <div
        {...rest}
        className={twMerge(
          "border-text text-text-contrast flex size-4 cursor-pointer items-center justify-center rounded border",
          checked && "bg-primary-500",
          rest.className ?? "",
        )}
      >
        <Check className={twMerge(`size-3 ${checked ? "block" : "hidden"}`)} />
      </div>
    </label>
  )
}

export default Checkbox
