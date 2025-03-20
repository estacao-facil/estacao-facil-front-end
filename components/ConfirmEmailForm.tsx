import Button from "./Button"

const ConfirmEmailForm = () => {
  return (
    <form className="flex w-full max-w-[380px] flex-col gap-14" action="">
      <div className="flex w-full justify-between gap-5 px-5" id="code-inputs">
        <input
          className="flex-center size-12 rounded border border-text p-2 text-center focus:border-primary md:size-[3.75rem]"
          type="text"
        />
        <input
          className="flex-center size-12 rounded border border-text p-2 text-center focus:border-primary md:size-[3.75rem]"
          type="text"
        />
        <input
          className="flex-center size-12 rounded border border-text p-2 text-center focus:border-primary md:size-[3.75rem]"
          type="text"
        />
        <input
          className="flex-center size-12 rounded border border-text p-2 text-center focus:border-primary md:size-[3.75rem]"
          type="text"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button>Confirmar Email</Button>

        <span className="text-sm hover:cursor-pointer hover:underline md:text-base">
          Não recebi um código
        </span>
      </div>
    </form>
  )
}

export default ConfirmEmailForm
