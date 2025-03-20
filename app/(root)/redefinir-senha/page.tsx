import ResetPasswordForm from "@/components/ResetPasswordForm"

const page = () => {
  return (
    <main className="flex-center mt-10 flex w-full grow flex-col gap-14">
      <h1 className="text-center text-4xl font-bold">
        Redefinir
        <br />
        Senha
      </h1>

      <p className="text-center">Defina uma nova senha</p>

      <ResetPasswordForm />
    </main>
  )
}

export default page
