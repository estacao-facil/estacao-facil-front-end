import { Check } from "lucide-react"
import Link from "next/link"

const ResetPasswordSuccess = () => {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-x-clip">
      <div className="bg-primary-light pointer-events-none absolute -top-[145px] -z-10 h-[200px] w-[125vw] rounded-full blur-[50px] md:h-[250px]" />
      <div className="mt-10 flex w-full max-w-[400px] grow flex-col items-center gap-13 px-8 md:mt-0 md:justify-center md:gap-10">
        <div className="flex flex-col items-center gap-2 md:gap-10">
          <Check size={96} strokeWidth={0.5} />
          <h1 className="text-center text-4xl font-bold">Pronto!</h1>
        </div>
        <p className="text-center">
          Sua senha foi redefinida com sucesso.{" "}
          <br className="hidden md:block" /> Agora volte para o inicio.
        </p>
        <Link href="/" className="btn w-full">
          Inicio
        </Link>
      </div>
    </main>
  )
}

export default ResetPasswordSuccess
