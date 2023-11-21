import React from 'react'

const AddBlog = () => {
  return (
    <div className='mx-5 lg:mx-20 pt-8 my-12 text-udark'>
        <h2 className="text-4xl font-bold my-5">Add Blog</h2>
        <div className="flex flex-col">
          <label htmlFor="imageUpload" className="ulabel">
            Upload Images
          </label>
          <input type="file" className="uinput" multiple name="imageUpload" id="" />
        </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              Blog Title
            </label>
            <input type="text" className="uinput" name="title" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc" className="ulabel">Content</label>
            <textarea name="desc" className="uinput" id="" cols="30" rows="10"></textarea>
            </div>
        
        <div className="flex flex-col my-2">
            <button type='submit' className="py-2 px-4 w-40 bg-ubg border border-solid border-udark font-semibold">Submit</button>
        </div>
      </div>
  )
}

export default AddBlog