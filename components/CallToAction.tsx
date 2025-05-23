import Link from "next/link"

const CallToAction = () => {
  return (
    <section className="home-section-container flex w-full flex-col items-center gap-5">
      <h2 className="home-h2 text-center font-bold">Use Agora!</h2>
      <p className="max-w-[296px] text-center">
        Descubra como a Cecília pode te ajudar a viajar melhor metrô de SP.
      </p>
      <Link href="/chat" className="btn !w-full max-w-[340px]">
        Iniciar Conversa
      </Link>
    </section>
  )
}

export default CallToAction
