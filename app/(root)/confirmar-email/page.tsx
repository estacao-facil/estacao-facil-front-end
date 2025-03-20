import ConfirmEmailForm from "@/components/ConfirmEmailForm"

const ConfirmarEmail = () => {
  return (
    <main className="flex-center mt-10 flex w-full grow flex-col gap-14 px-8 md:px-0">
      <h1 className="text-center text-3xl font-bold md:text-4xl">
        Insira o Código de Confirmação
      </h1>

      <p className="max-w-[380px] text-center">
        Um código de 4 dígitos foi enviado para seu email:{" "}
        <span className="text-primary">emaildecadastro@gmail.com</span>
      </p>

      <ConfirmEmailForm />
    </main>
  )
}

export default ConfirmarEmail
