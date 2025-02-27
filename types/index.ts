export type NavLinkType = {
  label: string
  url: string
}

export type ProductImageType = {
  src: string
  width: number
  height: number
}

export type ProductImagesType = {
  sm: ProductImageType
  md: ProductImageType
  lg: ProductImageType
}

export type FeatureType = {
  Icon: React.ElementType
  title: string
  description: string
}

export type Question = {
  question: string
  response: React.ReactNode
}

export type ButtonProps = {
  children: string | React.ReactNode
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type AccordionProps = {
  title: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>
