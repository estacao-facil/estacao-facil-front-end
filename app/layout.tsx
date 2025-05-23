import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

import AuthProvider from "@/contexts/AuthContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Estação Fácil",
  description: "Estação Fácil - Seu guia inteligente do metro de São Paulo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} font-poppins text-text antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
