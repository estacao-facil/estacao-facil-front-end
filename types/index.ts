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
  icon: string
  title: string
  description: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
