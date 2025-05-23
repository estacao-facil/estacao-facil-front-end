"use client"

import { LoaderCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { productImages } from "@/constants"
import { ProductImageType } from "@/types"

const ProductImage = () => {
  const [productImage, setProductImage] = useState<ProductImageType | null>(
    null,
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateImage = () => {
        const width = window.innerWidth

        if (width < 640) {
          setProductImage(productImages.sm)
        } else if (width < 1024) {
          setProductImage(productImages.md)
        } else {
          setProductImage(productImages.lg)
        }
      }

      updateImage()
      window.addEventListener("resize", updateImage)

      return () => window.removeEventListener("resize", updateImage)
    }
  }, [])

  return (
    <>
      {productImage ? (
        <Image
          src={productImage.src}
          alt="Imagem demonstrativa de layout"
          width={productImage.width}
          height={productImage.height}
          className="h-auto w-[236px] md:w-[230px] lg:w-full lg:max-w-[600px]"
          priority
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <LoaderCircle className="text-primary-500 size-12 animate-spin" />
        </div>
      )}
    </>
  )
}

export default ProductImage
