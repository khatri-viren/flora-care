import React from 'react'
import Accordian from './Accordian/Accordian'

const FAQs = () => {
  return (
    <section className='mx-5 lg:mx-20 my-12 pb-12'>
        <h4 className='font-bold text-3xl'>FAQs</h4>
        <p className="font-light text-sm mt-4">Find answers to commonly asked questions about our product, its usage, and maintenance.</p>
        <hr className='border border-solid border-umedium my-4' />
        <Accordian title='How does it work?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum delectus odio sapiente!' />
        <Accordian title='How does it work?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum delectus odio sapiente!' />
        <Accordian title='How does it work?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum delectus odio sapiente!' />
        <Accordian title='How does it work?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum delectus odio sapiente!' />
        <Accordian title='How does it work?' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum delectus odio sapiente!' />
    </section>
  )
}

export default FAQs