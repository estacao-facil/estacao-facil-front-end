"use client"

import { ChevronLeft } from "lucide-react"
import { useContext } from "react"
import { twMerge } from "tailwind-merge"

import { ChatContext } from "@/contexts/ChatContext"

import Button from "./Button"
import ChatMenu from "./ChatMenu"

const MobileChatMenu = () => {
  const { sideMenu, toggleSideMenu } = useContext(ChatContext)

  return (
    <aside
      className={twMerge(
        "fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 md:hidden",
        sideMenu ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={toggleSideMenu}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "absolute top-0 left-0 flex h-dvh w-4/5 flex-col bg-white px-5 shadow-lg transition-transform duration-300 ease-in-out",
          sideMenu ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Button
          className="absolute top-5 left-full -translate-x-1/2 rounded-full"
          onClick={toggleSideMenu}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <ChatMenu />
      </div>
    </aside>
  )
}

export default MobileChatMenu
