import AtSign from "@/public/icons/at-sign.svg"

import Button from "./Button"
import CustomInput from "./CustomInput"

const ForgetPasswordForm = () => {
  return (
    <form className="flex w-full max-w-[380px] flex-col gap-14" action="#">
      <CustomInput
        label=""
        id="email"
        placeholder="Digite seu email"
        icon={AtSign}
        type="email"
      />

      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default ForgetPasswordForm
