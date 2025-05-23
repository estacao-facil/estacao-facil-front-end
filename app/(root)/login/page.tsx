import Image from "next/image"

import SingInForm from "@/components/SingInForm"

const SingIn = () => {
  return (
    <>
      <header className="relative flex w-full justify-center overflow-x-clip">
        <div className="bg-primary-light pointer-events-none absolute -top-[145px] -z-10 h-[355px] w-[125vw] rounded-full blur-[50px]" />
        <Image
          src="/images/logo.svg"
          alt="Logo Estação Fácil"
          width={0}
          height={0}
          priority
          className="mt-10 h-auto w-[175px] md:mt-26"
        />
      </header>
      <main className="mt-13 flex w-full grow flex-col items-center gap-13 px-8">
        <h1 className="text-4xl font-bold">Fazer Login</h1>
        <SingInForm />
      </main>
    </>
  )
}

export default SingIn
