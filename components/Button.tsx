import { twMerge } from "tailwind-merge"

import { ButtonProps } from "@/types"

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "text-text-contrast bg-primary-500 hover:bg-primary-400 size-fit cursor-pointer rounded-lg text-center font-bold uppercase transition-all duration-300",
        typeof children === "string" ? "px-4 py-2" : "p-2",
        rest.className ?? "",
      )}
    >
      {children}
    </button>
  )
}

export default Button
