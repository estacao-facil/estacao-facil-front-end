import Image from "next/image"

import Github from "@/public/icons/github.svg"
import Linkedin from "@/public/icons/linkedin.svg"

interface DevCardProps {
  src_photo: string
  name: string
  info: string
  position: string
  github: string
  linkedin: string
}

const DevCard = ({
  src_photo,
  name,
  info,
  position,
  github,
  linkedin,
}: DevCardProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Image
        className="rounded-full"
        src={src_photo}
        width={136}
        height={136}
        alt={`Foto do Desenvolvedor ${name}`}
      />

      <h2 className="text-xl font-semibold">{name}</h2>
      <span className="-mt-2 text-sm">{info}</span>

      <p>{position}</p>

      <div className="flex gap-4">
        <a href={github}>
          <Github className="size-6" />
        </a>

        <a href={linkedin}>
          <Linkedin className="size-6" />
        </a>
      </div>
    </div>
  )
}

export default DevCard
