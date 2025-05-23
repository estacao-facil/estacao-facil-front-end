"use client"

import { useParams, useRouter } from "next/navigation"
import { useContext } from "react"

import { ChatContext } from "@/contexts/ChatContext"
import { apiFetch } from "@/services/api"

import Button from "./Button"

const DeleteChatDialog = ({ closeFunction }: { closeFunction: () => void }) => {
  const { chatCode } = useParams()
  const router = useRouter()
  const { setChats } = useContext(ChatContext)

  const deleteChat = async () => {
    await apiFetch(`/chats/${chatCode}`, {
      method: "DELETE",
    })

    setChats((prev) =>
      prev ? prev.filter((chat) => chat.url !== `/chat/${chatCode}`) : prev,
    )
    closeFunction()
    router.push("/chat")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
      <div className="flex w-full max-w-120 flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-error-400 text-lg font-bold">
          Deseja realmente excluir este chat?
        </h2>
        <div className="flex justify-end gap-4">
          <Button onClick={() => closeFunction()}>Cancelar</Button>
          <Button
            onClick={() => deleteChat()}
            className="bg-error-400 hover:bg-error-300"
          >
            Excluir
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeleteChatDialog
