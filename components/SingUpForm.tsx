"use client"

import { AtSign, Lock, User } from "lucide-react"
import Link from "next/link"
import { useContext, useRef } from "react"

import {
  noMatchPasswordMessage,
  requiredErrorMessage,
  validEmail,
} from "@/constants"
import { AuthContext } from "@/contexts/AuthContext"
import { apiFetch } from "@/services/api"
import { FormRootHandle, SingUpFormData } from "@/types"

import { Field } from "./Field"
import { Form } from "./Form"

const SingUpForm = () => {
  const { signIn } = useContext(AuthContext)
  const signUpFormRef = useRef<FormRootHandle<SingUpFormData>>(null)

  const onValidSubmit = async (data: SingUpFormData) => {
    signUpFormRef.current?.clearErrors("root")

    try {
      await apiFetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data["name"],
          last_name: data["lastName"],
          email: data["email"],
          password: data["password"],
        }),
      })

      await signIn({
        email: data["email"],
        password: data["password"],
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message == "First name and last name combination already exists"
        ) {
          signUpFormRef.current?.setError("root", {
            message: "Essa combinação de nome e sobrenome já existe.",
          })

          return
        } else if (error.message == "Email already exists") {
          signUpFormRef.current?.setError("email", {
            message: "E-mail já cadastrado.",
          })

          return
        }
      }

      signUpFormRef.current?.setError("root", {
        message: "Ocorreu um erro desconhecido.\nTente novamente mais tarde",
      })
    }
  }

  return (
    <Form.Root<SingUpFormData>
      onValidSubmit={onValidSubmit}
      onInvalidSubmit={() => null}
      className="flex w-full max-w-[400px] flex-col gap-13 md:gap-10"
      ref={signUpFormRef}
    >
      <div className="flex flex-col gap-3 md:gap-5">
        <Form.FeedbackMessage />
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
          <Field.Label>Email</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={AtSign} />
            <Field.TextInput
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
              placeholder="Insira sua senha"
              validate={{
                required: requiredErrorMessage,
              }}
              eyeToggle
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
        <Field.Root fieldName="confirmPassword">
          <Field.Label>Confirmar senha</Field.Label>
          <Field.TextInputWrapper>
            <Field.LabelIcon icon={Lock} />
            <Field.PasswordInput
              placeholder="Confirme sua senha"
              validate={{
                required: requiredErrorMessage,
                validate: (value) =>
                  value === signUpFormRef.current?.getValues("password") ||
                  noMatchPasswordMessage,
              }}
              eyeToggle
            />
          </Field.TextInputWrapper>
          <Field.FeedbackMessage />
        </Field.Root>
      </div>
      <div className="flex flex-col gap-2 md:mb-20">
        <Form.SubmitButton className="w-full">Continuar</Form.SubmitButton>
        <p className="text-center text-xs">
          Já tem um conta?{" "}
          <Link href="/login" className="link text-primary-500 font-semibold">
            Fazer Login
          </Link>
        </p>
      </div>
    </Form.Root>
  )
}

export default SingUpForm
