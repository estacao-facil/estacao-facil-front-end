import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { FieldPasswordInputProps } from "@/types"

import { useFieldContext } from "@/contexts/FieldContext"
import TextInput from "./TextInput"

const PasswordInput = ({
  placeholder,
  eyeToggle = false,
  validate,
  ...rest
}: FieldPasswordInputProps) => {
  const { fieldErrors } = useFieldContext()

  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <>
      <TextInput
        {...rest}
        type={passwordVisible ? "text" : "password"}
        placeholder={placeholder}
        validate={validate}
      />
      {eyeToggle && (
        <button
          className={twMerge(
            "text-icon-500 cursor-pointer",
            fieldErrors ? "text-error-300" : "",
          )}
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Eye className="size-5" />
          ) : (
            <EyeOff className="size-5" />
          )}
        </button>
      )}
    </>
  )
}

export default PasswordInput
