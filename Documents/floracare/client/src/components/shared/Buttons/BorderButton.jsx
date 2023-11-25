import React from 'react'

const BorderButton = (props) => {
  return (
    <button className="p-2 w-32 h-12 text-udark border-udark border ">{props.title}</button>
  )
}

export default BorderButton