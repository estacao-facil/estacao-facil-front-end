import Header from "@/components/Header"
import Product from "@/components/Product"
import Start from "@/components/Start"

import Train from "@/public/images/train.svg"

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
      </main>
    </>
  )
}

export default Home
