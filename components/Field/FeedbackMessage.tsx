import { twMerge } from "tailwind-merge"

import { useFieldContext } from "@/contexts/FieldContext"

const FeedbackMessage = ({
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { fieldErrors } = useFieldContext()

  return (
    <p
      {...rest}
      className={twMerge(
        "text-error-300 -mt-1 hidden text-xs",
        fieldErrors ? "block" : "",
        rest.className ?? "",
      )}
    >
      {fieldErrors?.message}
    </p>
  )
}

export default FeedbackMessage
