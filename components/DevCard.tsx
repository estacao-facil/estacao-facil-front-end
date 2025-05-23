import Image from "next/image"

import Github from "@/assets/icons/github.svg"
import Linkedin from "@/assets/icons/linkedin.svg"
import { DevCardProps } from "@/types"

const DevCard = ({
  name,
  rm,
  classRoom,
  position,
  github,
  linkedin,
  devPhoto,
}: DevCardProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-2">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={devPhoto}
          alt={`Foto do Desenvolvedor ${name}`}
          placeholder="blur"
          width={136}
          height={136}
          quality={100}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-xs">
            RM{rm} {classRoom}
          </p>
        </div>
        <p className="w-full max-w-[296px] text-center">{position}</p>
      </div>
      <div className="flex gap-4">
        <a className="cursor-pointer" href={github}>
          <Github className="size-6 transition hover:opacity-80" />
        </a>
        <a className="cursor-pointer" href={linkedin}>
          <Linkedin className="size-6 transition hover:opacity-80" />
        </a>
      </div>
    </div>
  )
}

export default DevCard
