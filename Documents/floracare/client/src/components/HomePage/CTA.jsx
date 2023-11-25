import React from 'react'
import BorderButton from '../shared/Buttons/BorderButton'
import FillButton from '../shared/Buttons/FillButton'

const CTA = () => {
  return (
    <section className='md:grid md:grid-cols-2 md:mx-12 lg:mx-24 text-udark my-24'>
        <div className="leftSide mx-auto space-y-4 my-auto w-3/4">
            <div className='text-4xl font-bold'>Transforming plant care with IoT</div>
            <div className='text-sm font-light'>Discover how our monitoring devices optimize growth and reduce water waste.</div>
            <div className='space-x-4'>
            <FillButton title="Contact" />
            <BorderButton title="Learn More" />
            </div>

        </div>
        <div className="hidden md:block rightSide mx-auto">
            <img src="https://via.placeholder.com/500x200" alt="" className='' />
        </div>

    </section>
  )
}

export default CTA