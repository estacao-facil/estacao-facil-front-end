"use client"

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
          alt="Imagem desmonstrativa de layout"
          width={productImage.width}
          height={productImage.height}
          className="h-auto w-[236px] md:w-[230px] lg:w-full lg:max-w-[600px]"
          priority
        />
      ) : (
        <div className="flex-center size-full">
          <Image
            src="/icons/loader.svg"
            alt="Carregando..."
            width={64}
            height={64}
            className="animate-spin"
          />
        </div>
      )}
    </>
  )
}

export default ProductImage
