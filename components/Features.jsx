import { features } from "@/constants"

import Clock from "@/public/icons/clock.svg"
import Map from "@/public/icons/map.svg"
import QRCode from "@/public/icons/qr-code.svg"

const featuresIcons = {
  "qr-code": QRCode,
  clock: Clock,
  map: Map,
}

const Features = () => {
  return (
    <section className="index-container mt-[3.25rem] grid gap-12 md:mt-16 lg:mt-24 md:grid-cols-2 md:grid-rows-2 md:gap-10 md:gap-y-5">
      <h2 className="text-center text-4xl font-bold !leading-snug md:!leading-tight lg:text-5xl md:text-left md:self-end">
        Principais
        <br />
        Funcionalidades
      </h2>
      <div className="flex flex-col gap-5 row-span-2 md:-order-1 items-center w-full lg:items-end">
        {features.map(({ icon, title, description }, i) => {
          const IconComponent = featuresIcons[icon]

          return (
            <div
              key={i}
              className="border border-border rounded-lg p-3 w-full max-w-[424px]"
            >
              <IconComponent
                className="text-icon-placeholder"
                width={24}
                height={24}
              />
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          )
        })}
      </div>
      <p className="font-bold text-xl md:text-base text-center md:font-normal md:self-start md:text-left">
        E muitas outras!
      </p>
    </section>
  )
}

export default Features
