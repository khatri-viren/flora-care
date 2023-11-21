import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='w-fit space-y-1 mx-auto my-5'>
      <Link to={"/productpage"}><img src="https://via.placeholder.com/300x300" alt="" className=''/> </Link>        
        <div className="content flex justify-between px-1">
        <Link to={"/productpage"}><span className='text-lg font-semibold'>Smart Planter</span></Link>
            <span className='text-lg font-semibold'>$55</span>
        </div>
        <div className='text-sm font-light px-1'>Standard</div>
        <button className='border border-udark p-2 w-full'>Buy Now</button>
    </div>
  )
}

export default ProductCard