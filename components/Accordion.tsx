import { useRef, useState } from "react"

import { AccordionProps } from "@/types"
import { Minus, Plus } from "lucide-react"
import { twMerge } from "tailwind-merge"

const Accordion = ({ title, children, ...props }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div className="w-full" {...props}>
      <button
        className={twMerge(
          "bg-primary-500 text-text-contrast hover:bg-primary-400 flex w-full cursor-pointer items-center justify-between gap-2 rounded p-3 text-left duration-200 md:py-6",
          isOpen ? "!rounded-b-none" : "",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="relative size-6">
          <Minus
            className={twMerge(
              "absolute size-6 transition-transform duration-300",
              isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0",
            )}
          />
          <Plus
            className={twMerge(
              "absolute size-6 transition-transform duration-300",
              isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100",
            )}
          />
        </span>
      </button>

      <div
        className="overflow-y-hidden transition-all"
        style={{ height: isOpen ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="bg-primary-50 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
