import { twMerge } from "tailwind-merge"

import { ButtonProps } from "@/types"

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={twMerge("btn-primary", className)} {...props}>
      {children}
    </button>
  )
}

export default Button
