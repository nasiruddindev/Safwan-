import React from 'react'

const FotterList = ({text,className}) => {
  return (
    <div>
      <ul className=' mt-[60px]'>
        <li className={`font-jost font-medium text-lg text-white px-5 border-r border-[#ffffff1a] ${className}`}>{text}</li>
      </ul>
    </div>
  )
}

export default FotterList
