"use client"

import { useEffect } from "react"

const TelegramPage = () => {
  useEffect(() => {
    window.location.href = "https://t.me/Cecilia_est_facil_bot"
  }, [])

  return (
    <div className="flex grow items-center justify-center">
      <p>
        Voce deverá ser redirecionado para o Telegram. Caso isso não ocorra
        clique{" "}
        <a
          className="link text-primary-500"
          href="https://t.me/Cecilia_est_facil_bot"
        >
          aqui
        </a>
        .
      </p>
    </div>
  )
}

export default TelegramPage
