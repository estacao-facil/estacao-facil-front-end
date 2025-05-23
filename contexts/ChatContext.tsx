"use client"

import { createContext, useState } from "react"

import { ChatContextType, ChatMessageType, ChatType } from "@/types"

export const ChatContext = createContext({} as ChatContextType)

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenu, setSideMenu] = useState<boolean>(false)
  const [waitingReply, setWaitingReply] = useState<boolean>(false)
  const [messages, setMessages] = useState<ChatMessageType[] | null>(null)
  const [context, setContext] = useState<Record<string, unknown>>({})
  const [chats, setChats] = useState<ChatType[] | null>(null)

  const toggleSideMenu = () => {
    setSideMenu((prev) => !prev)
  }

  return (
    <ChatContext.Provider
      value={{
        sideMenu,
        toggleSideMenu,
        waitingReply,
        setWaitingReply,
        messages,
        setMessages,
        context,
        setContext,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
