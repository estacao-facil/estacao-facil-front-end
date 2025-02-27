import { useRef, useState } from "react"

import Minus from "@/public/icons/minus.svg"
import Plus from "@/public/icons/plus.svg"

import { AccordionProps } from "@/types"

const Accordion = ({ title, children, ...props }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div className="w-full" {...props}>
      <button
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded bg-primary p-3 text-left text-text-contrast duration-200 hover:bg-primary-400 md:py-6 ${isOpen ? "!rounded-b-none" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="relative size-6">
          <Minus
            width={24}
            height={24}
            className={`absolute transition-transform duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`}
          />
          <Plus
            width={24}
            height={24}
            className={`absolute transition-transform duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
          />
        </span>
      </button>

      <div
        className={`overflow-y-hidden transition-all`}
        style={{ height: isOpen ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="bg-primary-100 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
