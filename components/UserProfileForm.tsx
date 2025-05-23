"use client"

import { AtSign, User } from "lucide-react"
import Link from "next/link"
import { useContext, useRef, useState } from "react"

import { requiredErrorMessage, validEmail } from "@/constants"
import { AuthContext } from "@/contexts/AuthContext"
import { apiFetch } from "@/services/api"
import { FormRootHandle, UserProfileFormData } from "@/types"

import Button from "./Button"
import { Field } from "./Field"
import { Form } from "./Form"
import { twMerge } from "tailwind-merge"

const UserProfileForm = () => {
  const { user, logout } = useContext(AuthContext)
  const userProfileFormRef = useRef<FormRootHandle<UserProfileFormData>>(null)
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [messageAnimation, setMessageAnimation] = useState<boolean>(false)

  const cleanSuccessMessage = () => {
    setMessageAnimation(false)
    setTimeout(() => setSuccessMessage(""), 300)
  }

  const onValidSubmit = async (data: UserProfileFormData) => {
    userProfileFormRef.current?.clearErrors("root")

    try {
      await apiFetch(`/users/${user!.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data["name"],
          last_name: data["lastName"],
          email: data["email"],
        }),
      })

      setMessageAnimation(true)
      setSuccessMessage("Alterações salvas com sucesso!")
      setTimeout(() => cleanSuccessMessage(), 4000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message == "First name and last name combination already exists"
        ) {
          userProfileFormRef.current?.setError("root", {
            message: "Essa combinação de nome e sobrenome já existe.",
          })

          return
        }
        if (error.message == "Email already exists") {
          userProfileFormRef.current?.setError("email", {
            message: "E-mail já cadastrado.",
          })

          return
        }
      }

      userProfileFormRef.current?.setError("root", {
        message: "Ocorreu um erro desconhecido.\nTente novamente mais tarde",
      })
    }
  }

  return (
    <Form.Root<UserProfileFormData>
      onValidSubmit={onValidSubmit}
      onInvalidSubmit={() => null}
      className="flex w-full max-w-[400px] flex-col gap-13 md:gap-10"
      formOptions={{
        defaultValues: {
          name: user!.first_name,
          lastName: user!.last_name,
          email: user!.email,
        },
      }}
      ref={userProfileFormRef}
    >
      <div className="flex flex-col gap-3 md:gap-5">
        {successMessage ? (
          <p
            className={twMerge(
              "text-success-300 bg-success-50 border-success-300 -mt-1 w-full transform rounded border p-3 text-center text-sm font-semibold whitespace-pre-line transition-all duration-300 ease-in-out",
              messageAnimation
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            )}
          >
            {successMessage}
          </p>
        ) : (
          <Form.FeedbackMessage />
        )}
        <Field.Root fieldName="name">
          <Field.Label>Nome</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={User} />
            <Field.TextInput
              autoComplete="given-name"
              placeholder="Insira seu nome"
              validate={{
                required: requiredErrorMessage,
              }}
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
        <Field.Root fieldName="lastName">
          <Field.Label>Sobrenome</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={User} />
            <Field.TextInput
              autoComplete="family-name"
              placeholder="Insira seu sobrenome"
              validate={{
                required: requiredErrorMessage,
              }}
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
        <Field.Root fieldName="email">
          <Field.Label className="cursor-not-allowed">Email</Field.Label>
          <Field.TextInputWrapper className="cursor-not-allowed">
            <Field.LabelIcon icon={AtSign} />
            <Field.TextInput
              autoComplete="email"
              placeholder="Insira seu email"
              disabled
              validate={{
                required: requiredErrorMessage,
                ...validEmail,
              }}
              className="text-text/90"
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
      </div>
      <div className="flex flex-col items-center gap-2 md:mb-20">
        <Form.SubmitButton className="w-full">
          Salvar alterações
        </Form.SubmitButton>
        <Link
          href="/redefinir-senha"
          className="link text-primary-500 text-xs font-semibold"
        >
          Redefinir minha senha
        </Link>
        <Button
          type="button"
          className="bg-error-400 hover:text-error-400 border-error-400 mt-13 w-full border-2 hover:bg-white"
          onClick={logout}
        >
          Sair
        </Button>
      </div>
    </Form.Root>
  )
}

export default UserProfileForm
