import React from 'react'
import ProductHeader from '../components/ProductPage/ProductHeader/ProductHeader'
import InfoSection2 from '../components/HomePage/InfoSection2'
import InfoSection3 from '../components/HomePage/InfoSection3'
import InfoSection4 from '../components/ProductPage/InfoSection4/InfoSection4'
import Reviews from '../components/ProductPage/Reviews/Reviews'
import FAQs from '../components/ProductPage/FAQs/FAQs'

const ProductPage = () => {
  return (
    <div className='text-udark'>

        <ProductHeader />
        <InfoSection2 />
        <InfoSection3 />
        <InfoSection4 />
        <Reviews />
        <FAQs />
    </div>
  )
}

export default ProductPage