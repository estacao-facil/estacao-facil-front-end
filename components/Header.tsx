"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import Button from "./Button"
import NavLinks from "./NavLinks"

import AlignJustifyIcon from "@/public/icons/align-justify.svg"
import Cancel from "@/public/icons/cancel.svg"

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)

  const [mobileMenu, setMobileMenu] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsVisible(currentScrollY < lastScrollY.current)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`index-container sticky left-0 top-0 w-full overflow-x-clip transition-transform duration-300 ${isVisible || mobileMenu ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center border-b border-border px-3 py-4 md:p-3 lg:px-5">
        <div className="flex gap-6">
          <Link href="/">
            <Image
              src="/images/horizontal-logo.svg"
              alt="Logo"
              height={40}
              width={165}
              className="h-8 w-auto md:h-10"
            />
          </Link>

          <ul className="hidden items-center gap-4 lg:flex">
            <NavLinks />
          </ul>
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <Link href="/cadastro" className="link hidden md:block">
            Cadastrar-se
          </Link>
          <Link href="/login" className="button text-xs md:text-base">
            Login
          </Link>
          <Button
            className="h-fit !p-2 text-xs md:!p-3 md:text-base lg:hidden"
            aria-label="Abrir menu mobile"
            onClick={() => setMobileMenu(true)}
          >
            <AlignJustifyIcon width={16} height={16} />
          </Button>
        </div>
      </div>

      <div
        className={`size-screen absolute left-0 top-0 bg-black/50 transition-opacity duration-300 lg:hidden ${mobileMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMobileMenu(false)}
      >
        <div
          className={`absolute right-0 top-0 h-screen w-72 bg-white px-8 py-4 shadow-lg transition-transform duration-300 ease-in-out md:w-96 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Button
            className="button ml-auto block !p-2 md:!p-3"
            aria-label="Fechar menu mobile"
            onClick={() => setMobileMenu(false)}
          >
            <Cancel width={16} height={16} alt="X" />
          </Button>

          <ul className="mt-6 flex flex-col gap-6">
            <NavLinks />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
