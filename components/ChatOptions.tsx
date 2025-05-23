"use client"

import { Pencil, Trash } from "lucide-react"
import { useState } from "react"

import Button from "./Button"
import DeleteChatDialog from "./DeleteChatDialog"
import RenameChatDialog from "./RenameChatDialog"

const ChatOptions = ({ closeFunction }: { closeFunction: () => void }) => {
  const [dialogType, setDialogType] = useState<"rename" | "delete" | null>(null)

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={() => closeFunction()} />
      <div className="absolute top-full right-full z-20 mt-1 ml-1 flex flex-col rounded bg-white p-3 shadow-xl">
        <Button
          onClick={() => setDialogType("rename")}
          className="text-text hover:bg-primary-50 flex w-full items-center gap-2 bg-transparent p-4 font-normal text-nowrap"
        >
          <Pencil className="size-5" />
          Renomear Chat
        </Button>
        <Button
          onClick={() => setDialogType("delete")}
          className="text-error-400 hover:bg-error-50 flex w-full items-center gap-2 bg-transparent p-4 font-semibold text-nowrap"
        >
          <Trash className="size-5" />
          Excluir Chat
        </Button>
      </div>

      {dialogType === "rename" && (
        <RenameChatDialog closeFunction={closeFunction} />
      )}

      {dialogType === "delete" && (
        <DeleteChatDialog closeFunction={closeFunction} />
      )}
    </>
  )
}

export default ChatOptions
