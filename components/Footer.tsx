import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="mt-13 w-full md:mt-10">
      <div className="flex flex-col items-center md:px-14">
        <div className="bg-border-500 h-px w-full" />
        <div className="mt-8 flex w-full max-w-[500px] flex-col gap-4 px-8 pt-8 pb-1.5 md:mt-10 md:flex-row md:justify-between md:gap-10 md:px-0">
          <div className="flex flex-col gap-3 md:justify-center md:text-right lg:text-left">
            <h3 className="font-medium">Dúvidas?</h3>
            <p className="text-sm">
              Envie um e-mail para:
              <br />
              <span className="text-primary-500">
                estacaofacil.contato@gmail.com
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium">Páginas Úteis</h3>
            <ul className="flex flex-col gap-1 text-sm">
              {footerLinks.map(({ label, url }, i) => {
                return (
                  <li key={i}>
                    <Link href={url} className="link">
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="from-primary-light mt-1.5 flex w-full flex-col items-center gap-3 bg-gradient-to-t pt-7 pb-3 md:mt-7">
        <Image
          src="/images/horizontal-logo.svg"
          alt="Logo"
          width={0}
          height={0}
          className="h-auto w-[165px]"
        />
        <span className="text-center text-xs uppercase">
          © 2024 Estação Fácil
        </span>
      </div>
    </footer>
  )
}

export default Footer
