import React from 'react'

const ProductCard = () => {
  return (
    <div className="product flex my-4">
    <img src="https://placehold.co/100x100" alt="" />
    <div className="details mx-10 space-y-1">
        <div className="text-lg font-bold">Product Name</div>
        <div className="font-semibold">$55</div>
        <div>Quantity: 1</div>
    </div>
</div>
  )
}

export default ProductCard