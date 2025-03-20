import ForgetPasswordForm from "@/components/ForgetPasswordForm"

const Login = () => {
  return (
    <main className="z-[1] mt-10 flex w-full grow flex-col items-center gap-14 px-8">
      <h1 className="text-center text-4xl font-bold">
        Esqueceu sua
        <br />
        Senha?
      </h1>

      <p className="w-full max-w-[245px] break-words text-center">
        Informe o endereço de e-mail associado a sua conta
      </p>

      <ForgetPasswordForm />
    </main>
  )
}

export default Login
