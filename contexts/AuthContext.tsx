"use client"

import { useRouter } from "next/navigation"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { createContext, useEffect, useState } from "react"

import { signInRequest } from "@/services/auth"
import { recoveryUserRequest } from "@/services/user"
import { AuthContextType, SignInData, User } from "@/types"

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const router = useRouter()

  const isAuthenticated = !!user

  useEffect(() => {
    const { "estacao-facil.token": token } = parseCookies()

    if (token) {
      recoveryUserRequest(token)
        .then((res) => setUser(res))
        .catch(() => setUser(null))
    } else {
      setUser(null)
    }
  }, [])

  const signIn = async (data: SignInData) => {
    const { access_token, user } = await signInRequest(data)

    setCookie(undefined, "estacao-facil.token", access_token, {
      maxAge: 60 * 60 * 0.5, // 30 minutes
    })

    setUser(user)

    router.push("/chat")
  }

  const logout = () => {
    setUser(undefined)
    destroyCookie(undefined, "estacao-facil.token")

    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
