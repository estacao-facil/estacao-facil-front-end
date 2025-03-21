import Image from "next/image"

interface Agent {
  name: "cecília" | "user"
  image: string
}

interface MessageProps {
  agent: Agent
  content: string
}

const Message = ({ agent, content }: MessageProps) => {
  return (
    <div
      className={`relative flex gap-4 ${agent.name == "user" ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={agent.image}
        alt={
          agent.name == "cecília"
            ? "Foto de perfil da Cecília"
            : "Foto de perfil do Usuário"
        }
        width={28}
        height={28}
        className="size-7 rounded-full"
      />
      <p
        className={`max-w-[200px] rounded-lg bg-primary p-2 text-white ${agent.name == "cecília" ? "rounded-tl-none" : "rounded-tr-none"}`}
      >
        {content}
      </p>
      <span
        className={`absolute size-0 rounded-sm border-8 border-transparent border-t-primary bg-transparent ${agent.name == "cecília" ? "left-[38px] border-r-primary" : "right-[38px] border-l-primary"}`}
      />
    </div>
  )
}

export default Message
