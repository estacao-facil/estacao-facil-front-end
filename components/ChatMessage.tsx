import Image from "next/image"

import { ChatMessageProps } from "@/types"

const ChatMessage = ({ agent, content }: ChatMessageProps) => {
  return (
    <li
      className={`animate-fade-in relative flex translate-y-2 gap-4 opacity-0 ${agent == "cecilia" ? "" : "flex-row-reverse"}`}
    >
      <Image
        src={
          agent == "cecilia"
            ? "/images/cecilia-photo.png"
            : "/images/user-photo.png"
        }
        alt={
          agent == "cecilia"
            ? "Foto de perfil Cecilia"
            : "Foto de perfil Usuário"
        }
        width={28}
        height={28}
        className="size-7"
      />
      <p className="bg-primary-500 max-w-3/5 rounded-lg p-2 whitespace-pre-line text-white">
        {content}
      </p>
      <span
        className={`border-t-primary-500 absolute size-0 rounded-sm border-8 border-transparent bg-transparent ${agent == "cecilia" ? "border-r-primary left-[38px]" : "border-l-primary right-[38px]"}`}
      />
    </li>
  )
}

export default ChatMessage
