import { FeatureType, NavLinkType, ProductImagesType } from "@/types"

export const navLinks: NavLinkType[] = [
  {
    label: "Inicio",
    url: "/#",
  },
  {
    label: "Produto",
    url: "/#produto",
  },
  {
    label: "Funcionalidades",
    url: "/#funcionalidades",
  },
  {
    label: "Perguntas Frequentes",
    url: "/#perguntas-frequentes",
  },
]

export const productImages: ProductImagesType = {
  sm: {
    src: "/images/phone-template.png",
    width: 310,
    height: 654,
  },
  md: {
    src: "/images/tablet-template.png",
    width: 453,
    height: 638,
  },
  lg: {
    src: "/images/desktop-template.png",
    width: 1050,
    height: 633,
  },
}

export const features: FeatureType[] = [
  {
    icon: "qr-code",
    title: "Detecção de Localidade",
    description:
      "Escaneie um dos QR Codes disponíveis pela estação para identificar sua posição.",
  },
  {
    icon: "clock",
    title: "Informações em Tempo Real",
    description:
      "Receba atualizações sobre horários, atrasos e lotação dos trens.",
  },
  {
    icon: "map",
    title: "Dicas e Recomendações",
    description: "Encontre restaurantes próximos às estações.",
  },
]
