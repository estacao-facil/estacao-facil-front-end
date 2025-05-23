import ResetPasswordForm from "@/components/ResetPasswordForm"

const ResetPassword = () => {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-x-clip">
      <div className="bg-primary-light pointer-events-none absolute -top-[145px] -z-10 h-[200px] w-[125vw] rounded-full blur-[50px] md:h-[250px]" />
      <div className="mt-10 flex grow flex-col items-center gap-13 px-8 md:mt-26 md:justify-center md:gap-10">
        <h1 className="text-center text-4xl leading-snug font-bold md:leading-normal">
          Redefinir Senha
        </h1>
        <p className="text-center">Defina sua nova senha</p>
        <ResetPasswordForm />
      </div>
    </main>
  )
}

export default ResetPassword
