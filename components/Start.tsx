import Image from "next/image"
import Link from "next/link"

const Start = () => {
  return (
    <section id="inicio" className="index-container gap-4 md:gap-5">
      <div className="mt-[3.25rem] flex w-full flex-col items-center gap-10 md:mt-10 md:gap-5">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          height={114}
          width={175}
          className="hidden md:block"
        />

        <div className="flex flex-col items-center gap-5 md:gap-2">
          <h1 className="h1 text-center font-bold !leading-snug md:!leading-tight">
            Guia Inteligente
            <br />
            no Metrô SP
          </h1>
          <p className="max-w-[296px] text-center">
            Respostas rápidas e precisas sobre as linha do metrô de São Paulo,
            para viagens mais tranquilas.
          </p>
        </div>

        <div className="flex w-full max-w-[340px] flex-col items-center gap-2">
          <Link href="/chat" className="button w-full text-center">
            Começe Agora
          </Link>
          <p className="text-sm">
            Se{" "}
            <Link href="/cadastro" className="link font-semibold text-primary">
              cadastre
            </Link>{" "}
            para salvar suas conversas
          </p>
        </div>
      </div>
    </section>
  )
}

export default Start
