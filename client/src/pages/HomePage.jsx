import React from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import HeroSection from '../components/HomePage/HeroSection'
import InfoSection from '../components/HomePage/InfoSection'
import InfoSection2 from '../components/HomePage/InfoSection2'
import InfoSection3 from '../components/HomePage/InfoSection3'
import BlogShowcase from '../components/HomePage/BlogShowcase/BlogShowcase'
import Testimonial from '../components/HomePage/Testimonial'
import CTA from '../components/HomePage/CTA'
import Footer from '../components/shared/Footer/Footer'

const HomePage = () => {
  return (
    <div className='bg-ubg'>
    <HeroSection />
    {/* <InfoSection /> */}
    <InfoSection2 />
    <InfoSection3 />
    <BlogShowcase />
    <Testimonial />
    <CTA />
    </div>
  )
}

export default HomePage