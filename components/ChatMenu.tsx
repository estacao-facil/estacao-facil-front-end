"use client"

import { Pencil } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react"

import { AuthContext } from "@/contexts/AuthContext"
import { ChatContext } from "@/contexts/ChatContext"
import { apiFetch } from "@/services/api"
import { ChatListItemType, RawChat } from "@/types"

import Button from "./Button"
import ChatListItem from "./ChatListItem"
import { useRouter } from "next/navigation"

const ChatMenu = () => {
  const { user } = useContext(AuthContext)
  const { setMessages, chats, setChats } = useContext(ChatContext)

  const router = useRouter()

  const handleNewChat = () => {
    router.push("/chat")

    setMessages([])
  }

  useEffect(() => {
    const loadChats = async () => {
      const rawChats: RawChat[] = await apiFetch("/chats")

      const transformedChats: ChatListItemType[] = rawChats.map(
        ({ code, title }) => ({
          url: `/chat/${code}`,
          title,
        }),
      )

      setChats(transformedChats)
    }

    if (user) {
      loadChats()
    }
  }, [user, setChats])

  return (
    <div className="flex h-dvh flex-col">
      <Link href="/">
        <Image
          src="/images/horizontal-logo.svg"
          alt="Logo Estação Fácil"
          width={165}
          height={40}
          className="mt-8"
        />
      </Link>
      <Link href="/alertas" className="btn mt-10 !w-full">
        Ver Alertas
      </Link>
      <Button onClick={handleNewChat} className="mt-5 w-full">
        Nova Conversa
      </Button>
      <h2 className="text-primary-500 mt-10 text-lg font-bold">
        Conversas Anteriores
      </h2>
      {user ? (
        chats?.length ? (
          <ul className="relative z-10 mt-5 flex grow flex-col gap-3 overflow-x-visible overflow-y-auto pr-2">
            {chats.map(({ url, title }, i) => (
              <ChatListItem key={i} url={url} title={title} />
            ))}
          </ul>
        ) : (
          <div className="flex grow flex-col items-center justify-center gap-4 px-4 text-center">
            <p>Você ainda não iniciou nenhuma conversa.</p>
          </div>
        )
      ) : (
        <div className="flex grow flex-col items-center justify-center gap-4 px-4 text-center">
          <span className="text-primary-500 mb-2 text-xl font-bold uppercase">
            Você não está logado
          </span>
          <p>Faça login para acessar suas conversas salvas.</p>
          <Link href="/login" className="btn !w-full">
            Entrar
          </Link>
        </div>
      )}
      {user && (
        <div className="border-border-500 mt-1 flex items-center border-t py-4">
          <div className="flex grow items-center gap-3">
            <Link href="/perfil-usuario">
              <Image
                src="/images/user-photo.png"
                alt="Foto de Perfil Usuário"
                width={48}
                height={48}
              />
            </Link>

            <Link
              href="/perfil-usuario"
              className="link truncate font-semibold"
            >
              {user.first_name}
            </Link>
          </div>
          <Link
            href="/perfil-usuario"
            className="btn !text-text !bg-transparent"
          >
            <Pencil />
          </Link>
        </div>
      )}
    </div>
  )
}

export default ChatMenu
