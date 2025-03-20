import AtSign from "@/public/icons/at-sign.svg"
import Lock from "@/public/icons/lock.svg"

import Link from "next/link"
import Button from "./Button"
import Checkbox from "./Checkbox"
import CustomInput from "./CustomInput"

const LoginForm = () => {
  return (
    <form
      className="flex w-full max-w-[500px] flex-col gap-[52px] px-8"
      action=""
    >
      <h1 className="text-center text-4xl font-bold">Fazer Login</h1>

      <div className="flex w-full flex-col gap-6">
        <CustomInput
          label="Email"
          id="email"
          placeholder="Digite seu email"
          icon={AtSign}
          type="email"
        />

        <CustomInput
          label="Senha"
          id="password"
          placeholder="Digite sua senha"
          icon={Lock}
          type="password"
        />
      </div>

      <div className="-mt-11 flex flex-wrap justify-between gap-2 text-sm md:text-base">
        <Checkbox label="Lembrar de mim" name="remember-me" id="remember-me" />
        <Link
          href="/esqueci-minha-senha"
          className="link font-semibold text-primary"
        >
          Esqueceu sua senha?
        </Link>
      </div>

      <div className="flex w-full flex-col gap-2">
        <Button type="submit">Entrar</Button>
        <p className="text-center text-sm md:text-base">
          Ainda não possui uma conta?{" "}
          <Link href="/cadastro" className="link font-semibold text-primary">
            Cadastre-se
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
