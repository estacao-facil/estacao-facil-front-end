"use client"

import { AlignJustifyIcon, MoreVertical } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useContext, useState } from "react"
import { twMerge } from "tailwind-merge"

import { AuthContext } from "@/contexts/AuthContext"
import { ChatContext } from "@/contexts/ChatContext"

import Button from "./Button"
import ChatOptions from "./ChatOptions"

const ChatHeader = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const { toggleSideMenu } = useContext(ChatContext)
  const [chatOptions, setChatOptions] = useState<boolean>(false)

  const { chatCode } = useParams()

  return (
    <header className="flex w-full items-center gap-5 p-3">
      <Button onClick={toggleSideMenu}>
        <AlignJustifyIcon className="size-4" />
      </Button>
      <div className="flex grow items-center gap-2">
        <Image
          src="/images/cecilia-photo.png"
          alt="Foto de perfil Cecília"
          width={36}
          height={36}
          priority
        />
        <p>Cecília</p>
      </div>
      <div className="relative">
        <Button
          onClick={() => setChatOptions((prev) => !prev)}
          disabled={!isAuthenticated || !chatCode}
          className={twMerge(
            (!isAuthenticated || !chatCode) &&
              "bg-primary-300 hover:bg-primary-300 cursor-not-allowed",
          )}
        >
          <MoreVertical className="size-4" />
        </Button>
        {chatOptions && (
          <ChatOptions closeFunction={() => setChatOptions(false)} />
        )}
      </div>
    </header>
  )
}

export default ChatHeader
