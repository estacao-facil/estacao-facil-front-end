"use client"

import Train from "@/public/images/train.svg"

import CallToAction from "@/components/CallToAction"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Header from "@/components/Header"
import Product from "@/components/Product"
import Start from "@/components/Start"

const Home = () => {
  return (
    <>
      <Header />

      <main className="w-full overflow-x-clip">
        <Start />
        <Train
          width={600}
          height={120}
          className="mt-4 h-auto min-h-[120px] w-full min-w-[600px] md:mt-5"
        />
        <Product />
        <Features />
        <FAQ />
        <CallToAction />
      </main>
    </>
  )
}

export default Home
