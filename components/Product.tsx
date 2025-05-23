import ProductImage from "./ProductImage"

const Product = () => {
  return (
    <section
      id="produto"
      className="home-section-container grid scroll-mt-16 items-center gap-5 md:grid-cols-2 md:grid-rows-2 md:gap-y-3 lg:gap-x-10 lg:gap-y-5"
    >
      <h2 className="home-h2 text-center font-bold md:self-end md:text-right">
        Cecília será
        <br /> sua assistente
      </h2>
      <div className="flex w-full items-center justify-center md:row-span-2 lg:justify-start lg:py-[54px]">
        <ProductImage />
      </div>
      <p className="text-center md:self-start md:text-right">
        É só inciar uma conversa
        <br />e tirar suas dúvidas
      </p>
    </section>
  )
}

export default Product
