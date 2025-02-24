import { NavLinkType, ProductImagesType } from "@/types"

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
