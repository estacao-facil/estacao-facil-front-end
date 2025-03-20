interface CustomInputProps {
  label: string
  id: string
  placeholder?: string
  icon: React.ElementType
  type: string
}

const CustomInput = ({
  label,
  id,
  placeholder = "",
  icon: Icon,
  type,
}: CustomInputProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="cursor-pointer text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <div className="flex w-full items-center gap-2 rounded-xl border border-border px-4 py-3 transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/50 hover:border-primary">
        <label className="cursor-pointer" htmlFor={id}>
          <Icon className="size-6 text-icon-placeholder" />
        </label>
        <input
          className="w-full border-none bg-transparent p-0 outline-none placeholder:text-icon-placeholder-600"
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
      <span className="-mt-2 text-sm"></span>
    </div>
  )
}

export default CustomInput
