import Image from "next/image"

import AlignJustifyIcon from "@/public/icons/align-justify.svg"
import ArrowRight from "@/public/icons/arrow-right.svg"
import MoreVertical from "@/public/icons/more-vertical.svg"
import QRCode from "@/public/icons/qr-code.svg"
import Settings from "@/public/icons/settings.svg"

import Button from "@/components/Button"
import Message from "@/components/Message"

interface ChatMessage {
  agent: {
    name: "cecília" | "user"
    image: string
  }
  message: string
}

const messages: ChatMessage[] = [
  {
    agent: { name: "cecília", image: "/images/cecilia-photo.png" },
    message: "Olá! Posso te ajudar com alguma coisa?",
  },
  {
    agent: { name: "user", image: "/images/user-photo.png" },
    message: "Sim! Quero saber como recarregar meu bilhete.",
  },
]

const Chat = () => {
  return (
    <div className="flex">
      <aside className="hidden h-dvh w-4/5 max-w-[320px] flex-col border-r border-border px-5 lg:flex">
        <div className="flex grow flex-col gap-7 p-5">
          <a href="index.html">
            <Image
              src="/images/horizontal-logo.svg"
              alt="Logo Estação Fácil"
              width={165}
              height={40}
            />
          </a>

          <Button>Nova Conversa</Button>

          <nav className="flex flex-col gap-6">
            <h1 className="text-xl font-bold text-primary">
              Conversas Anteriores
            </h1>

            <ul className="flex w-full flex-col gap-4">
              <li>
                <a className="block w-full" href="#">
                  Horário do proximo trem
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3 border-t border-border py-4">
          <Image
            src="/images/user-photo.png"
            alt="Avatar do Usuário"
            width={48}
            height={48}
            className="rounded-full"
          />

          <p className="grow font-semibold">João Gomes</p>

          <Button className="h-fit !bg-transparent !p-2 text-xs md:!p-3 md:text-base">
            <Settings width={32} height={32} className="text-text" />
          </Button>
        </div>
      </aside>

      <main className="flex h-dvh w-dvw flex-col items-center">
        <header className="flex w-full max-w-[900px] items-center justify-between gap-5 px-3 py-4">
          <Button className="h-fit !p-2 text-xs md:!p-3 md:text-base">
            <AlignJustifyIcon width={16} height={16} />
          </Button>
          <div className="flex grow items-center gap-2">
            <Image
              src="/images/cecilia-photo.png"
              alt="Foto de perfil da Cecília"
              width={36}
              height={36}
              className="rounded-full"
            />
            <p>Cecília</p>
          </div>

          <Button className="h-fit !p-2 text-xs md:!p-3 md:text-base">
            <MoreVertical width={16} height={16} />
          </Button>
        </header>
        <section className="flex w-full max-w-[900px] grow flex-col justify-end gap-5 px-3 py-5">
          {messages.map(({ agent, message }, i) => (
            <Message key={i} agent={agent} content={message} />
          ))}
        </section>
        <div className="flex w-full max-w-[900px] items-center gap-2 px-3 py-6">
          <Button className="h-fit !p-2 text-xs md:!p-3 md:text-base">
            <QRCode className="size-4" />
          </Button>
          <input
            className="w-full rounded-full border border-border bg-transparent p-0 px-4 py-3 outline-none placeholder:text-icon-placeholder-600"
            type="text"
            id="message"
            placeholder="Insira sua mensagem"
          />
          <Button className="h-fit !rounded-full !p-2 text-xs md:!p-3 md:text-base">
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Chat
