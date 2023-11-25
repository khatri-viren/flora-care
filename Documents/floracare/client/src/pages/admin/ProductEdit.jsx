import React from "react";

const ProductEdit = () => {
  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark">
      <h2 className="text-4xl font-bold">Edit Product</h2>
      <div className="imageContainer grid grid-cols-2 gap-10 lg:flex justify-evenly my-5">
        <img src="https://placehold.co/200x200" alt="" className="mx-auto" />
        <img src="https://placehold.co/200x200" alt="" className="mx-auto"/>
        <img src="https://placehold.co/200x200" alt="" className="mx-auto"/>
        <img src="https://placehold.co/200x200" alt="" className="mx-auto"/>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16">
        <div className="leftSide">
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              Product Name
            </label>
            <input type="text" className="uinput" name="title" id="" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="desc" className="ulabel">Description</label>
            <textarea name="desc" className="uinput" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="rightSide">
        <div className="flex flex-col">
          <label htmlFor="imageUpload" className="ulabel">
            Upload Images
          </label>
          <input type="file" className="uinput" multiple name="imageUpload" id="" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="quantity" className="ulabel">Quantity</label>
            <input type="number" className="uinput w-28" name="quantity" />
        </div>
        <div className="flex flex-col my-2">
            <button className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold mb-5">Delete Product</button>
            <button type='submit' className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold">Update</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
