import { twMerge } from "tailwind-merge"

import { useFormContext } from "@/contexts/FormContext"

const FeedbackMessage = ({
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { errors } = useFormContext()
  const formErros = errors["root"]

  return (
    <p
      {...rest}
      className={twMerge(
        "text-error-300 bg-error-50 border-error-300 -mt-1 w-full transform rounded border p-3 text-center text-sm font-semibold whitespace-pre-line transition-all duration-300 ease-in-out",
        formErros
          ? "translate-y-0 opacity-100"
          : "pointer-events-none hidden -translate-y-2 opacity-0",
        rest.className ?? "",
      )}
    >
      {formErros?.message}
    </p>
  )
}

export default FeedbackMessage
