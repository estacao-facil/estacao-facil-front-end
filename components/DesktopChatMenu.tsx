"use client"

import { useContext } from "react"
import { twMerge } from "tailwind-merge"

import { ChatContext } from "@/contexts/ChatContext"

import ChatMenu from "./ChatMenu"

const DesktopChatMenu = () => {
  const { sideMenu } = useContext(ChatContext)

  return (
    <div
      className={twMerge(
        "border-border-500 relative hidden h-dvh overflow-hidden border-r shadow transition-all duration-300 ease-in-out md:block",
        sideMenu ? "w-72 min-w-72" : "w-0 min-w-0",
      )}
    >
      <div className="absolute inset-0 w-72 px-5">
        <ChatMenu />
      </div>
    </div>
  )
}

export default DesktopChatMenu
