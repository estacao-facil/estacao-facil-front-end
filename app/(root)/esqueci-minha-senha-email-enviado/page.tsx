import Mail from "@/public/icons/mail.svg"
import Link from "next/link"

const EsqueciMinhaSenhaEmailEnviado = () => {
  return (
    <main className="flex-center mt-10 flex w-full grow flex-col gap-14 px-8">
      <Mail className="size-24 text-text" />
      <h1 className="text-center text-4xl font-bold">
        Verifique
        <br />
        seu e-mail
      </h1>
      <p className="text-center">
        Enviamos um e-mail para você com
        <br />
        um link de recuperação de senha
      </p>
      <Link href="/login" className="btn-primary">
        Voltar para login
      </Link>
    </main>
  )
}

export default EsqueciMinhaSenhaEmailEnviado
