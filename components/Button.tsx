import React from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={twMerge("button", className)} {...props}>
      {children}
    </button>
  )
}

export default Button
