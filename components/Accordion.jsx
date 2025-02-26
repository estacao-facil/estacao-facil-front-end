import Plus from "@/public/icons/plus.svg"

const Accordion = ({ title, body }) => {
  return (
    <div className="w-full text-text-contrast p-3 md:py-6 rounded flex justify-between items-center gap-2 bg-primary">
      <h1 className="font-medium w-full">{title}</h1>
      <p className="hidden">{body}</p>
      <Plus width={24} height={24} className="flex-shrink-0" />
    </div>
  )
}

export default Accordion
