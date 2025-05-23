"use client"

import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext, useRef } from "react"

import { noMatchPasswordMessage, requiredErrorMessage } from "@/constants"
import { AuthContext } from "@/contexts/AuthContext"
import { apiFetch } from "@/services/api"
import { FormRootHandle, ResetPasswordFormData } from "@/types"

import { Field } from "./Field"
import { Form } from "./Form"

const ResetPasswordForm = () => {
  const { user } = useContext(AuthContext)
  const resetPasswordFormRef =
    useRef<FormRootHandle<ResetPasswordFormData>>(null)
  const router = useRouter()

  const onValidSubmit = async (data: ResetPasswordFormData) => {
    resetPasswordFormRef.current?.clearErrors("root")

    try {
      await apiFetch(`/users/${user!.id}/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: data["password"],
          new_password: data["newPassword"],
        }),
      })

      router.push("/redefinir-senha-sucesso")
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message == "Incorrect password") {
          resetPasswordFormRef.current?.setError("password", {
            message: "Senha incorreta",
          })

          return
        }
      }

      resetPasswordFormRef.current?.setError("root", {
        message: "Ocorreu um erro desconhecido.\nTente novamente mais tarde",
      })
    }
  }

  return (
    <Form.Root<ResetPasswordFormData>
      onValidSubmit={onValidSubmit}
      onInvalidSubmit={() => null}
      className="flex w-full max-w-[500px] flex-col gap-13"
      ref={resetPasswordFormRef}
    >
      <div className="flex flex-col gap-6">
        <Field.Root fieldName="password">
          <Field.Label>Senha</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={Lock} />
            <Field.PasswordInput
              placeholder="Insira sua senha atual"
              validate={{
                required: requiredErrorMessage,
              }}
              eyeToggle
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
        <Field.Root fieldName="newPassword">
          <Field.Label>Nova Senha</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={Lock} />
            <Field.PasswordInput
              placeholder="Insira sua nova senha"
              validate={{
                required: requiredErrorMessage,
              }}
              eyeToggle
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
        <Field.Root fieldName="confirmNewPassword">
          <Field.Label>Confirmar nova senha</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={Lock} />
            <Field.PasswordInput
              placeholder="Confirme sua nova senha"
              validate={{
                required: requiredErrorMessage,
                validate: (value) =>
                  value ===
                    resetPasswordFormRef.current?.getValues("newPassword") ||
                  noMatchPasswordMessage,
              }}
              eyeToggle
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
      </div>

      <Form.SubmitButton className="w-full">Enviar</Form.SubmitButton>
    </Form.Root>
  )
}

export default ResetPasswordForm
