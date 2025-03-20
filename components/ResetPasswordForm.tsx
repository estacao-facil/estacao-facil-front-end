import Button from "./Button"
import CustomInput from "./CustomInput"

import Lock from "@/public/icons/lock.svg"

const ResetPasswordForm = () => {
  return (
    <form
      className="flex w-full max-w-[500px] flex-col gap-[52px] px-8"
      action=""
    >
      <div className="flex w-full flex-col gap-6">
        <CustomInput
          label="Senha"
          id="password"
          placeholder="Digite sua senha"
          icon={Lock}
          type="password"
        />

        <CustomInput
          label="Senha"
          id="confirm-password"
          placeholder="Confirme sua senha"
          icon={Lock}
          type="password"
        />
      </div>

      <Button type="submit">Redefinir senha</Button>
    </form>
  )
}

export default ResetPasswordForm
