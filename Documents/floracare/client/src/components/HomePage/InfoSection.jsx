import React from 'react'
import heroimg from '../../assets/heroSection.jpeg'

const InfoSection = () => {
  return (
    <section className='infoSection w-100 flex flex-col my-12'>
        <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
            <span className='mx-auto text-xs'>Revolutionize</span>
            <h2 className='mx-auto text-center text-3xl font-bold'>Unlocking Plant Potential with Advanced Technology</h2>
            <p className='w-1/2 mx-auto text-center text-sm'>BotanicBalance Systems uses IoT-based monitoring devices to optimize plant growth and reduce water waste. Through advanced data collection and machine learning models, our users gain access to valuable analytics via an intuitive dashboard.</p>
        </div>
        <div className="cardContainer flex space-x-10 mx-auto">
            <div className="card flex flex-col">
                <img src={heroimg} className='h-60 w-[400px]' alt=""  />
                <div className="content flex flex-col text-udark my-2">
                <h5 className='text-xl font-semibold mx-auto'>Machine Learning Models</h5>
                <p className='text-sm mx-auto mt-2 mb-3'>Leverage AI to optimize plant care strategies.</p>
                </div>
            </div>
            <div className="card flex flex-col">
                <img src={heroimg} className='h-60 w-[400px]' alt=""  />
                <div className="content flex flex-col text-udark my-2">
                <h5 className='text-xl font-semibold mx-auto'>User Dashboard Analytics</h5>
                <p className='text-sm mx-auto mt-2 mb-3'>Visualize and analyze plant growth data.</p>
                </div>
            </div>
            <div className="card flex flex-col">
                <img src={heroimg} className='h-60 w-[400px]' alt="" />
                <div className="content flex flex-col text-udark my-2">
                <h5 className='text-xl font-semibold mx-auto'>Advanced Data Collection</h5>
                <p className='text-sm mx-auto mt-2 mb-3'>Collect real-time data to monitor plant health.</p>
                </div>
            </div>
        </div>
        <div className="buttonsContainer flex mx-auto my-10">
            {/* <button className='p-2 w-32 h-12 text-udark border border-udark'>Learn More</button> */}
            {/* <button className='p-2 w-32 h-12 text-udark'>Sign Up</button> */}
        </div>
    </section>
  )
}

export default InfoSection