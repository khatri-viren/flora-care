import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import ChartComponent from './ChartComponent'
import UserInfo from './UserInfo'

const UserDashboard = () => {
  return (
    <div className='bg-ubg'>
    <Navbar />
    <div className="chartContainer m-10 grid grid-cols-2">
      <UserInfo />
      <div className='grid grid-cols-2 w-100 my-auto mx-3'>
        <div className="tempContainer text-3xl shadow-xl font-bold text-ubg p-10 m-3 h-fit bg-umedium">
          Temperature: <br />32.21 C
        </div>
        <div className="humContainer text-3xl shadow-xl font-bold text-ubg bg-umedium h-fit p-10 m-3">
          Humidity: <br />42.21%
          </div>
        
      </div>
      <div className="grid grid-cols-2">
      <ChartComponent />
      <ChartComponent />

      </div>
      <div className="grid grid-cols-2">
      <ChartComponent />
      <ChartComponent />

      </div>
    </div>
    </div>
  )
}

export default UserDashboard