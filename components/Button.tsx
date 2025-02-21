import React from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-lg bg-primary px-4 py-2 font-bold uppercase text-text-contrast transition-all hover:bg-primary-400 h-fit",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
