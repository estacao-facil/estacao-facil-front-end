import { twMerge } from "tailwind-merge"

import { ButtonProps } from "@/types"

import Button from "@/components/Button"

const SubmitButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button {...rest} type="submit" className={twMerge(rest.className)}>
      {children}
    </Button>
  )
}

export default SubmitButton
