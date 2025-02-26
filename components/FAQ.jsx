import Accordion from "@/components/Accordion"

const questions = [
  {
    question: "A Cecília é uma inteligência artificial?",
    response: "Resposta",
  },
  {
    question: "Como funciona a localização por QR Code?",
    response: "Resposta",
  },
  {
    question: "Como eu inicio uma conversa com a Cecília?",
    response: "Resposta",
  },
  {
    question: "Preciso instalar algum aplicativo para usar o chat?",
    response: "Resposta",
  },
  {
    question: "Quais tipos de informações a Cecília pode oferecer?",
    response: "Resposta",
  },
  {
    question: "Preciso criar uma conta para usar o chat?",
    response: "Resposta",
  },
  {
    question: "O chat está disponível apenas na linha 4 (amarela)?",
    response: "Resposta",
  },
]

const FAQ = () => {
  return (
    <section className="index-container mt-[3.25rem] flex flex-col items-center gap-5 md:mt-16 lg:mt-24 lg:gap-10">
      <h2 className="text-center text-4xl font-bold !leading-snug md:!leading-tight lg:text-5xl">
        Perguntas
        <br />
        Frequentes
      </h2>
      <div className="flex w-full flex-col items-center gap-5 md:max-w-[440px] lg:max-w-[650px]">
        {questions.map(({ question, response }, i) => (
          <Accordion key={i} title={question} body={response} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
