"use client"

import { AtSign, Lock } from "lucide-react"
import Link from "next/link"
import { useContext, useRef } from "react"

import { requiredErrorMessage, validEmail } from "@/constants"
import { FormRootHandle, SingInFormData } from "@/types"
import { AuthContext } from "@/contexts/AuthContext"

import { Field } from "./Field"
import { Form } from "./Form"

const SingInForm = () => {
  const { signIn } = useContext(AuthContext)
  const signInFormRef = useRef<FormRootHandle<SingInFormData>>(null)

  const onValidSubmit = async (data: SingInFormData) => {
    signInFormRef.current?.clearErrors("root")

    try {
      await signIn(data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message == "Incorrect email or password") {
          signInFormRef.current?.setError("root", {
            message: "Usuário ou senha inválidos.",
          })

          return
        }
      }

      signInFormRef.current?.setError("root", {
        message: "Ocorreu um erro desconhecido. Tente novamente mais tarde",
      })
    }
  }

  return (
    <Form.Root<SingInFormData>
      onValidSubmit={onValidSubmit}
      onInvalidSubmit={() => null}
      className="flex w-full max-w-[400px] flex-col gap-13"
      ref={signInFormRef}
    >
      <div className="flex flex-col gap-2">
        <Form.FeedbackMessage />
        <div className="flex flex-col gap-6">
          <Field.Root fieldName="email">
            <Field.Label>Email</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={AtSign} />
              <Field.TextInput
                type="email"
                autoComplete="email"
                placeholder="Insira seu email"
                validate={{
                  required: requiredErrorMessage,
                  ...validEmail,
                }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="password">
            <Field.Label>Senha</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={Lock} />
              <Field.PasswordInput
                type="password"
                placeholder="Insira sua senha"
                validate={{
                  required: requiredErrorMessage,
                }}
                eyeToggle
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:mb-20">
        <Form.SubmitButton className="w-full">Entrar</Form.SubmitButton>
        <p className="text-center text-xs">
          Ainda não tem um conta?{" "}
          <Link
            href="/cadastro"
            className="link text-primary-500 font-semibold"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </Form.Root>
  )
}

export default SingInForm
