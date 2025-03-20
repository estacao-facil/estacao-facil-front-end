import Check from "@/public/icons/check.svg"
import Link from "next/link"

const page = () => {
  return (
    <main className="flex-center mt-10 flex w-full grow flex-col gap-14 px-8">
      <Check className="size-24 text-text" />
      <h1 className="text-center text-4xl font-bold">Pronto!</h1>
      <p className="text-center">
        Sua senha foi redefinida com sucesso.
        <br />
        Agora faça login com sua nova senha.
      </p>
      <Link href="/login" className="btn-primary w-full max-w-[320px]">
        Login
      </Link>
    </main>
  )
}

export default page
