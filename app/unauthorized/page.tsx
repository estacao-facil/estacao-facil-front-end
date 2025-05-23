import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center px-5 lg:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-500 text-center text-5xl font-black">
          401
        </h1>
        <h2 className="text-primary-500 text-center text-xl font-black uppercase">
          Acesso não autorizado
        </h2>
        <p className="text-center">
          Para acessar essa página você deve fazer login.
        </p>
        <Link href="/login" className="btn !w-full">
          Fazer login
        </Link>
      </div>
      <Image
        src="/images/unauthorized.svg"
        alt="Ilustração página não encontrada"
        width={500}
        height={500}
        priority
        className="w-full max-w-125"
      />
    </main>
  )
}

export default NotFound
