import Button from "@/components/Button"
import CustomInput from "@/components/CustomInput"
import Image from "next/image"
import Link from "next/link"

import AtSign from "@/public/icons/at-sign.svg"
import User from "@/public/icons/user.svg"

const UserProfile = () => {
  return (
    <main className="mt-10 flex w-full grow flex-col items-center gap-[52px] px-8">
      <h1 className="text-3xl font-bold">Perfil</h1>
      <Image
        src="/images/user-photo.png"
        alt="Foto do usuário"
        width={136}
        height={136}
        className="rounded-full"
      />
      <form action="" className="flex w-full max-w-[500px] flex-col gap-[52px]">
        <div className="flex flex-col gap-2">
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
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit">Salvar Alterações</Button>
          <Link
            href="/redefinir-senha"
            className="link text-center text-sm font-semibold text-primary"
          >
            Redefinir minha senha
          </Link>
        </div>
      </form>
    </main>
  )
}

export default UserProfile
