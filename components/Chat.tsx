"use client"

import { LoaderCircle } from "lucide-react"
import { useParams } from "next/navigation"
import { useContext, useEffect, useRef } from "react"

import { ChatContext } from "@/contexts/ChatContext"
import { apiFetch } from "@/services/api"
import { ChatMessageType, RawMessage } from "@/types"

import ChatMessage from "./ChatMessage"
import SendMessageForm from "./SendMessageForm"
import TypingDots from "./TypingDots"

const Chat = () => {
  const { messages, setMessages, waitingReply } = useContext(ChatContext)

  const { chatCode } = useParams() as { chatCode: string }
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadMessages = async () => {
      const chat = await apiFetch(`/chats/${chatCode}`)

      const transformedMessages: ChatMessageType[] = chat.messages.flatMap(
        (msg: RawMessage) => [
          { agent: "user", content: msg.content },
          { agent: "cecilia", content: msg.reply },
        ],
      )

      setMessages(transformedMessages ?? [])
    }

    if (chatCode) {
      loadMessages()
    } else {
      setMessages([])
    }
  }, [chatCode, setMessages])

  useEffect(() => {
    const messagesDiv = messagesRef.current

    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight
    }
  }, [messages])

  return (
    <>
      <div className="mx-1 flex size-full flex-col overflow-y-auto">
        <div
          className="flex flex-1 items-center justify-center overflow-y-auto"
          ref={messagesRef}
        >
          {messages !== null ? (
            messages.length ? (
              <ul className="flex size-full max-w-180 flex-col gap-5 p-3">
                {messages.map((messageProps, i) => (
                  <ChatMessage key={i} {...messageProps} />
                ))}
                {waitingReply && (
                  <ChatMessage agent="cecilia" content={<TypingDots />} />
                )}
              </ul>
            ) : (
              <div className="flex size-full flex-col items-center justify-center">
                <h1 className="text-primary-500 px-5 text-center text-2xl font-semibold">
                  Experimente enviar uma mensagem.
                </h1>
                <SendMessageForm />
              </div>
            )
          ) : (
            <div className="flex size-full items-center justify-center">
              <LoaderCircle className="text-primary-500 size-8 animate-spin" />
            </div>
          )}
        </div>
      </div>
      {!!messages?.length && <SendMessageForm />}
    </>
  )
}

export default Chat
