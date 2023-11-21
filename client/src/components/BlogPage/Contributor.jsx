import React from 'react'

const Contributor = () => {
  return (
    <div className="contributor flex my-4">
            <img
              src="https://placehold.co/12x12"
              className="w-12 rounded-full"
              alt=""
            />
            <div className="container mx-3 my-auto">
              <div className="text-sm font-semibold">John Doe</div>
              <div className="text-sm">
                Content Writer, BotanicBalance Systems
              </div>
            </div>
          </div>
  )
}

export default Contributor