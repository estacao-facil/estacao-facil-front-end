"use client"

import { ArrowRight } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useContext, useRef } from "react"
import { twMerge } from "tailwind-merge"

import { requiredErrorMessage } from "@/constants"
import { AuthContext } from "@/contexts/AuthContext"
import { ChatContext } from "@/contexts/ChatContext"
import {
  createNewChat,
  sendLoggedInMessage,
  sendLoggedOutMessage,
} from "@/services/chat"
import {
  FormRootHandle,
  LoggedInMessageResponse,
  LoggedOutMessageResponse,
  SendMessageFormData,
} from "@/types"

import { Field } from "./Field"
import { Form } from "./Form"

const SendMessageForm = () => {
  const { user } = useContext(AuthContext)
  const {
    waitingReply,
    setWaitingReply,
    context,
    setContext,
    setMessages,
    setChats,
  } = useContext(ChatContext)

  const { chatCode } = useParams() as { chatCode: string }

  const sendMessageFormRef = useRef<FormRootHandle<SendMessageFormData>>(null)

  const router = useRouter()

  const sendMessage = async (data: SendMessageFormData) => {
    setWaitingReply(true)

    sendMessageFormRef.current?.reset()

    setMessages((prev) => [
      ...(prev ?? []),
      { agent: "user", content: data.message },
    ])

    let response: LoggedInMessageResponse | LoggedOutMessageResponse

    if (user) {
      if (!chatCode) {
        const new_chat = await createNewChat(data.message)

        await sendLoggedInMessage(data.message, new_chat.code)

        setWaitingReply(false)
        setChats((prev) =>
          prev
            ? [
                { url: `/chat/${new_chat.code}`, title: new_chat.title },
                ...prev,
              ]
            : prev,
        )
        router.push(`/chat/${new_chat.code}`)

        return
      } else {
        response = await sendLoggedInMessage(data.message, chatCode)
      }
    }

    if (!user) {
      response = await sendLoggedOutMessage(data.message, context)

      setContext(response.context)
    }

    setMessages((prev) => [
      ...(prev ?? []),
      { agent: "cecilia", content: response.reply },
    ])

    setWaitingReply(false)
  }

  return (
    <Form.Root
      onValidSubmit={sendMessage}
      onInvalidSubmit={() => null}
      className="flex w-full max-w-180 items-center gap-2 px-3 py-5"
      ref={sendMessageFormRef}
    >
      <Field.Root fieldName="message" className="w-full">
        <Field.TextInputWrapper className="rounded-full">
          <Field.TextInput
            placeholder="Insira sua mensagem"
            autoComplete="off"
            validate={{
              required: requiredErrorMessage,
            }}
          />
        </Field.TextInputWrapper>
        <Field.FeedbackMessage />
      </Field.Root>
      <Form.SubmitButton
        className={twMerge(
          "rounded-full p-2.5",
          waitingReply &&
            "bg-primary-300 hover:bg-primary-300 cursor-not-allowed",
        )}
        disabled={waitingReply}
      >
        <ArrowRight className="size-4" />
      </Form.SubmitButton>
    </Form.Root>
  )
}

export default SendMessageForm
