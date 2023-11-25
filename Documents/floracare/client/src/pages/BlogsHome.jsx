import React from 'react'
import BlogCard from '../components/BlogsHome/BlogCard'
import CTA2 from '../components/BlogsHome/CTA2'
import BorderButton from '../components/shared/Buttons/BorderButton'

const BlogsHome = () => {
  return (
    <div className='text-udark pt-5'>
        <section className='header mx-5 lg:mx-20 my-12'> 
        <h1 className='text-4xl font-bold'>Our Blogs</h1>
        <p className='text-sm font-light my-3'>A center for all our resources and insights</p>
        <div className="heroSection grid lg:grid-cols-2 my-10 gap-10">
            <div className="img mx-auto">
                <img src="https://placehold.co/600x300" alt="" />
            </div>
            <div className="rightSide mx-5 my-auto">
                <span className='w-fit px-2 py-2 bg-ulight text-xs font-semibold my-3'>Category</span>
                <h4 className='font-bold text-2xl lg:text-4xl tracking-wide my-3'>The Impact of Automation on Plant Care. Discover the Power of Plant Care</h4>
                <p className='font-light my-3'>Learn how to optimize plant growth and reduce water waste.</p>
            </div>
        </div>
        <div className="cardsContainer grid grid-cols-3 gap-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        </section>
        <section className='posts mx-5 lg:mx-20 my-12'>
            <h2 className='text-3xl font-bold my-5'>All Posts</h2>
            <hr className='border border-solid border-umedium mb-6' />
            <div className="cardsContainer  grid grid-cols-3 gap-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            </div>
            <div className='w-fit mx-auto mt-6'>
            <BorderButton title='Show More' />
            </div>
        </section>
        <CTA2 />
    </div>
  )
}

export default BlogsHome