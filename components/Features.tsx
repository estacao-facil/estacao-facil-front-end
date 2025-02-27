import { features } from "@/constants"

const Features = () => {
  return (
    <section
      id="funcionalidades"
      className="section-container grid items-center gap-12 md:grid-cols-2 md:grid-rows-2 md:gap-x-5 md:gap-y-3 lg:gap-x-10 lg:gap-y-5"
    >
      <h2 className="h2 text-center font-bold md:self-end md:text-left">
        Principais
        <br />
        Funcionalidades
      </h2>
      <div className="flex w-full flex-col items-center gap-5 md:-order-1 md:row-span-2 lg:items-end">
        {features.map(({ Icon, title, description }, i) => {
          return (
            <div
              key={i}
              className="w-full max-w-[424px] rounded-lg border border-border p-3"
            >
              <Icon width={24} height={24} className="text-icon-placeholder" />
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          )
        })}
      </div>
      <p className="-mt-7 text-center text-xl font-bold md:mt-0 md:self-start md:text-left md:text-base md:font-normal">
        E muitas outras!
      </p>
    </section>
  )
}

export default Features
