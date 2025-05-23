import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center px-5 lg:flex-row">
      <Image
        src="/images/404.svg"
        alt="Ilustração página não encontrada"
        width={500}
        height={500}
        priority
        className="w-full max-w-125"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-500 text-center text-5xl font-black">
          404
        </h1>
        <h2 className="text-primary-500 text-center text-xl font-black uppercase">
          Página não encontrada
        </h2>
        <p className="text-center">
          A página que você está tentando acessar parece não existir.
        </p>
        <Link href="/" className="btn !w-full">
          Voltar ao inicio
        </Link>
      </div>
    </main>
  )
}

export default NotFound
