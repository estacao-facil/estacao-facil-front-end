import Image from "next/image"
import Link from "next/link"

import { FooterProps } from "@/types"

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={`mt-[3.25rem] flex w-full flex-col items-center gap-9 md:mt-10 md:gap-7 ${className}`}
      {...props}
    >
      <div className="w-full md:px-14">
        <div className="h-px w-full bg-border" />
        <div className="m-auto flex w-full max-w-[700px] flex-col items-center gap-4 p-8 pb-0 text-sm md:flex-row md:gap-10 md:pt-10 md:text-base">
          <div className="flex w-full flex-col gap-3">
            <h3 className="font-medium md:text-right md:text-base lg:text-left">
              Dúvidas?
            </h3>
            <p className="md:text-right lg:text-left">
              Envie um email para:{" "}
              <span className="text-primary">
                estacaofacil.contato@gmail.com
              </span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <h3 className="font-medium">Links Úteis</h3>
            <ul className="flex w-full flex-col gap-1 md:gap-2">
              <li>
                <Link className="link" href="/">
                  Início
                </Link>
              </li>
              <li>
                <Link className="link" href="/#produto">
                  Sobre o Produto
                </Link>
              </li>
              <li>
                <Link className="link" href="/#funcionalidades">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link className="link" href="/#perguntas-frequentes">
                  Pergunatas Frequentes - FAQ
                </Link>
              </li>
              <li>
                <Link className="link" href="/desenvolvedores">
                  Equipe de Desenvolvimento
                </Link>
              </li>
              <li>
                <Link className="link" href="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" href="/cadastro">
                  Cadastro
                </Link>
              </li>
              <li>
                <Link className="link" href="/chat">
                  Chat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-3 bg-gradient-to-t from-primary-light pb-3">
        <Image
          src="/images/horizontal-logo.svg"
          alt="Logo"
          width={165}
          height={40}
        />
        <span className="uppercase">© 2024 Estação Fácil</span>
      </div>
    </footer>
  )
}

export default Footer
