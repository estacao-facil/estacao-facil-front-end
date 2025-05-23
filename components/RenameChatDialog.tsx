"use client"

import { Pencil } from "lucide-react"
import { useParams } from "next/navigation"
import { useContext, useEffect, useRef } from "react"

import { requiredErrorMessage } from "@/constants"
import { ChatContext } from "@/contexts/ChatContext"
import { apiFetch } from "@/services/api"
import { FormRootHandle, RenameChatFormData } from "@/types"

import Button from "./Button"
import { Field } from "./Field"
import { Form } from "./Form"

const RenameChatDialog = ({ closeFunction }: { closeFunction: () => void }) => {
  const renameChatForm = useRef<FormRootHandle<RenameChatFormData>>(null)
  const { setChats } = useContext(ChatContext)

  const { chatCode } = useParams()

  const renameChat = async (data: RenameChatFormData) => {
    renameChatForm.current?.clearErrors("root")

    try {
      await apiFetch(`/chats/${chatCode}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data["title"],
        }),
      })

      setChats((prev) =>
        prev!.map((chat) =>
          chat.url === `/chat/${chatCode}`
            ? { ...chat, title: data["title"] }
            : chat,
        ),
      )
      closeFunction()
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message == "Chat title already exists") {
          renameChatForm.current?.setError("title", {
            message: "Você já possui um chat com esse título.",
          })

          return
        }

        renameChatForm.current?.setError("root", {
          message: "Ocorreu um erro desconhecido.\nTente novamente mais tarde",
        })
      }
    }
  }

  useEffect(() => {
    const get_chat = async () => {
      const chat = await apiFetch(`/chats/${chatCode}`)

      renameChatForm.current?.setValue("title", chat.title)
    }

    get_chat()
  }, [chatCode])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
      <div className="w-full max-w-120 rounded-lg bg-white p-6 shadow-lg">
        <Form.Root
          onValidSubmit={renameChat}
          onInvalidSubmit={() => null}
          ref={renameChatForm}
          className="flex w-full flex-col gap-6"
        >
          <Form.FeedbackMessage />
          <Field.Root fieldName="title">
            <Field.Label>Renomear Chat</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={Pencil} />
              <Field.TextInput
                autoComplete="off"
                placeholder="Insira um novo titulo"
                validate={{
                  required: requiredErrorMessage,
                }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={closeFunction}
              className="bg-error-400 hover:bg-error-300"
            >
              Cancelar
            </Button>
            <Form.SubmitButton>Renomear</Form.SubmitButton>
          </div>
        </Form.Root>
      </div>
    </div>
  )
}

export default RenameChatDialog
