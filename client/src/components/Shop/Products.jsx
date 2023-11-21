import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <section className='mx-5 md:mx-20 py-10'>
        <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
            <h2 className='text-3xl font-bold'>Our Products</h2>
            <p className='text-sm'>Explore our wide range of innovative plant care products.</p>
        </div>
        <div className="cardContainer grid grid-cols-2 gap-8 lg:grid-cols-3 mb-24">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default Products