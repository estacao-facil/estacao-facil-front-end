import Image from "next/image"
import Link from "next/link"

const Start = () => {
  return (
    <section
      id="inicio"
      className="section-container flex flex-col items-center gap-10 md:gap-5"
    >
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={175}
        height={114}
        className="hidden md:block"
      />

      <div className="flex w-full flex-col items-center gap-5 md:gap-2">
        <h1 className="h1 text-center font-bold">
          Guia Inteligente <br />
          no Metrô SP
        </h1>
        <p className="w-full max-w-[296px] text-center">
          Respostas rápidas e precisas sobre as linha do metrô de São Paulo,
          para viagens mais tranquilas.
        </p>
      </div>

      <div className="flex w-full max-w-[340px] flex-col items-center md:gap-2">
        <Link href="/chat" className="btn-primary w-full">
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
    </section>
  )
}

export default Start
