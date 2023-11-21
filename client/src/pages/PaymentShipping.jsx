import React from 'react'

const PaymentShipping = () => {
  return (
    <div className='mx-5 pt-8 lg:mx-20 my-12 text-udark flex flex-col'>
        <h2 className='text-3xl font-semibold mb-8'>Your Shipping Address</h2>
        <form action="" method="post">
        <div className="addressContainer grid grid-cols-2">
            <div className="inputContainer flex flex-col mx-5 ">
              <label className='ulabel'  htmlFor="firstName">First Name</label>
              <input className='uinput' type="text" name="firstName" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5">
              <label className='ulabel'  htmlFor="lastName">Last Name</label>
              <input className='uinput' type="text" name="lastName" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5">
              <label className='ulabel'  htmlFor="email">Email</label>
              <input className='uinput' type="email" name="email" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5">
              <label className='ulabel'  htmlFor="phoneNumber">Phone Number</label>
              <input className='uinput' type="number" name="phoneNumber" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5 col-span-2">
              <label className='ulabel'  htmlFor="address1">Address Line 1</label>
              <input className='uinput' type="text" name="address1" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5 col-span-2">
              <label className='ulabel'  htmlFor="address2">Address Line 2</label>
              <input className='uinput' type="text" name="address2" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5">
              <label className='ulabel'  htmlFor="city">City</label>
              <input className='uinput' type="text" name="city" id="" />
            </div>
            <div className="inputContainer flex flex-col mx-5">
              <label  className='ulabel' htmlFor="pincode">Pincode</label>
              <input className='uinput' type="number" name="pincode" id="" />
            </div>
        </div>
        <h2 className='text-3xl font-semibold my-8'>Payment Method</h2>
            <div className="container">
              <input type="radio" name="paymentMethod" id="cod" value="cod" />
              <label className='ml-1 mr-5 font-semibold' htmlFor="cod">Cash on Delivery</label>
              <input type="radio" name="paymentMethod" id="netBanking" value="netBanking" />
              <label className='ml-1 mr-5 font-semibold' htmlFor="netBanking">Net Banking</label>
              <input type="radio" name="paymentMethod" id="card" value="card" />
              <label className='ml-1 mr-5 font-semibold' htmlFor="card">Credit/ Debit Card</label>
            </div>
            <div className='flex'>

            <button type="submit" className='py-3 px-10 mt-12 border border-solid border-udark mx-auto font-semibold'>Proceed</button>
            </div>
        </form>
    </div>
  )
}

export default PaymentShipping