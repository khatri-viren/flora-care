import React from 'react'
import heroimg from '../../assets/heroSection.jpeg'

const InfoSection2 = () => {
  return (
    <section className='mx-16 grid grid-cols-2 text-udark pb-10 my-20'>
        <div className="leftSide flex flex-col my-auto mx-10 space-y-5">
            <h3 className='text-4xl font-bold'>
            Revolutionize plant care with our IoT-based monitoring devices for optimized growth.
            </h3>
            <p className='font-light text-sm'>Our advanced data collection and machine learning models enable easy monitoring and reduced water waste.</p>
            <div className='grid grid-cols-2'>
                <div className='space-y-2'>
                    <span className='font-bold text-4xl'>50% Faster</span>
                    <p className='font-light text-sm'>Achieve optimal plant growth with our innovative monitoring solutions.</p>
                </div>
                <div className='space-y-2'>   
                    <span className='font-bold text-4xl'>50% Less</span>
                    <p className='font-light text-sm'>Reduce water waste and conserve resources with our smart devices.</p>
                </div>
            </div>
        </div>
        <div className="rightSide mx-auto">
            <img src={heroimg} alt="" className='max-h-[500px]' />
        </div>
    </section>
  )
}

export default InfoSection2