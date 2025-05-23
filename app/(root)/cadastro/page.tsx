import SingUpForm from "@/components/SingUpForm"

const SingUp = () => {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-x-clip">
      <div className="bg-primary-light pointer-events-none absolute -top-[145px] -z-10 h-[200px] w-[125vw] rounded-full blur-[50px] md:h-[250px]" />
      <div className="mt-10 flex grow flex-col items-center gap-13 px-8 md:mt-26 md:gap-10">
        <h1 className="text-4xl font-bold">Criar Conta</h1>
        <SingUpForm />
      </div>
    </main>
  )
}

export default SingUp
