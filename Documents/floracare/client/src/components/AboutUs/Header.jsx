import React from 'react'

const Header = () => {
  return (
    <section className='header grid lg:grid-cols-2 mx-5 space-y-4 lg:space-y-0 lg:mx-24 text-udark pt-28 pb-20 text-center lg:text-left'>
        <div className="leftSide ml-16">
            <div className='font-bold text-4xl lg:w-3/4'>Revolutionizing Plant Care</div>
        </div>
        <div className="rightSide mx-auto">
            <p className='text-sm font-light w-3/4 lg:w-full mx-auto'>Welcome to BotanicBalance Systems, where we use IoT-based monitoring devices and advanced data collection to optimize plant growth and reduce water waste. With our innovative machine learning models and analytics dashboard, users gain valuable insights into their plants' health and well-being.</p>
        </div>
    </section>
  )
}

export default Header