"use client"

import { LoaderCircle } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

import { AuthContext } from "@/contexts/AuthContext"

const ChatPage = () => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (user === undefined) return

    if (!user && pathname !== "/login") {
      router.replace("/unauthorized")
    }
  }, [user, pathname, router])

  if (user === undefined || !user)
    return (
      <div className="flex grow items-center justify-center">
        <LoaderCircle className="text-primary-500 size-8 animate-spin" />
      </div>
    )

  return <></>
}

export default ChatPage
