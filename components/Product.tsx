"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { productImages } from "@/constants"
import { ProductImageType } from "@/types"

const Product = () => {
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
    <section
      id="produto"
      className="index-container mt-[3.25rem] flex flex-col items-center gap-2 md:mt-16 lg:mt-24"
    >
      <div className="grid w-full gap-5 md:grid-cols-2 md:grid-rows-2 md:gap-10 md:gap-y-5">
        <h2 className="text-center text-4xl font-bold !leading-snug md:self-end md:text-right md:!leading-tight lg:text-5xl">
          Cecília será
          <br /> sua assistente
        </h2>
        <div className="flex-center w-full md:row-span-2 lg:justify-start">
          {productImage ? (
            <Image
              src={productImage.src}
              alt="Imagem desmonstrativa de layout"
              width={productImage.width}
              height={productImage.height}
              priority
              className="h-auto w-[236px] md:w-[230px] lg:w-full lg:max-w-[600px]"
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
        </div>
        <p className="text-center md:text-right">
          É só inciar uma conversa
          <br />e tirar suas dúvidas
        </p>
      </div>
    </section>
  )
}

export default Product
