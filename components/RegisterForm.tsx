import Link from "next/link"
import Button from "./Button"
import CustomInput from "./CustomInput"

import AtSign from "@/public/icons/at-sign.svg"
import Lock from "@/public/icons/lock.svg"
import User from "@/public/icons/user.svg"

const RegisterForm = () => {
  return (
    <form
      className="flex w-full max-w-[500px] flex-col gap-[52px] px-8"
      action=""
    >
      <h1 className="text-center text-4xl font-bold">Fazer Login</h1>

      <div className="flex w-full flex-col gap-6">
        <CustomInput
          label="Nome"
          id="name"
          placeholder="Digite seu nome"
          icon={User}
          type="text"
        />

        <CustomInput
          label="Sobrenome"
          id="last-name"
          placeholder="Digite seu sobrenome"
          icon={User}
          type="text"
        />

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

        <CustomInput
          label="Confirma Senha"
          id="confirm-password"
          placeholder="Confirme sua senha"
          icon={Lock}
          type="password"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <Button type="submit">Continuar</Button>
        <p className="text-center text-sm md:text-base">
          Já possui uma conta?{" "}
          <Link href="/login" className="link font-semibold text-primary">
            Fazer Login
          </Link>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm
