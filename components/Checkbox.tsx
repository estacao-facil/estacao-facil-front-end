import Check from "@/public/icons/check.svg"

interface CheckboxProps {
  label: string
  name: string
  id: string
  checked?: boolean
}

const Checkbox = ({ label, name, id, checked = false }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        className="peer hidden"
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={checked}
      />
      <div className="flex-center size-4 rounded border border-text bg-white transition-all peer-checked:border-primary peer-checked:bg-primary">
        <div className="peer-checked:block">
          <Check className="size-3 text-white" />
        </div>
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
