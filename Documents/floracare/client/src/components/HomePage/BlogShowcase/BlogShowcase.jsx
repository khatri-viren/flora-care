import React from 'react'
import BlogCard from './BlogCard/BlogCard'

const BlogShowcase = () => {
  return (
    <section className='infoSection w-100 flex flex-col my-12 pb-16'>
    <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
        <span className='mx-auto text-xs'>Insights</span>
        <h2 className='mx-auto text-center text-3xl font-bold'>Discover the Latest Trends</h2>
        <p className='w-1/2 mx-auto text-center text-sm'>Stay informed with our informative and engaging blog posts.</p>
    </div>
    <div className="cardContainer md:grid md:grid-cols-2 md:mx-12 lg:mx-24">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
   
</section>
  )
}

export default BlogShowcase