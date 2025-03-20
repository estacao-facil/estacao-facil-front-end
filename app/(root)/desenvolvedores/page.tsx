import DevCard from "@/components/DevCard"

const page = () => {
  return (
    <main className="flex-center mt-10 flex w-full grow flex-col gap-14 px-8 md:px-0">
      <h1 className="text-center text-3xl font-bold md:text-4xl">
        Equipe de
        <br />
        <span>Desenvolvimento</span>
      </h1>
      <section className="flex flex-col gap-[3.25rem] lg:flex-row">
        <DevCard
          src_photo="/images/angelo.png"
          name="Angelo Recke"
          info="RM: 560299 1-TDSQ"
          position="Engenheiro de Inteligência Artificial"
          github=""
          linkedin=""
        />
        <DevCard
          src_photo="/images/antonio.png"
          name="Antonio de Luca"
          info="RM: 560169 1-TDSQ"
          position="Desenvolvedor Backend e Líder"
          github=""
          linkedin=""
        />
        <DevCard
          src_photo="/images/paulo.png"
          name="Paulo Barbosa"
          info="RM: 559914 1-TDSQ"
          position="Desenvolvedor Frontend e Engenheiro de Banco de Dados"
          github=""
          linkedin=""
        />
      </section>
    </main>
  )
}

export default page
