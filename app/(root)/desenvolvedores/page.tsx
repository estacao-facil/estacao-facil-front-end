import { devs } from "@/constants"

import DevCard from "@/components/DevCard"

const Devs = () => {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-x-clip">
      <div className="bg-primary-light pointer-events-none absolute -top-[145px] -z-10 h-[200px] w-[125vw] rounded-full blur-[50px] md:h-[250px]" />
      <div className="mt-10 flex w-full grow flex-col items-center gap-13 px-8 md:mt-26 md:gap-10 md:px-20">
        <h1 className="text-center text-4xl leading-snug font-bold md:leading-normal">
          Equipe de
          <br />
          Desenvolvimento
        </h1>
        <div className="grid w-full max-w-[320px] grid-cols-1 items-stretch gap-13 md:mb-20 md:gap-10 lg:max-w-none lg:grid-cols-3">
          {devs.map((devInfos, i) => (
            <DevCard key={i} {...devInfos} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Devs
