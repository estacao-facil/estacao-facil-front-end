"use client"

import { questions } from "@/constants"
import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <section className="section-container flex flex-col items-center gap-5 lg:gap-10">
      <h2 className="h2 text-center font-bold">
        Perguntas
        <br />
        Frequentes
      </h2>
      <div className="item-center flex w-full flex-col gap-5 md:max-w-[440px] lg:max-w-[650px]">
        {questions.map(({ question, response }, i) => (
          <Accordion key={i} title={question}>
            {response}
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQ
