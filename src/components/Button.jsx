import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='bg-secondary text-white px-1 py-6'><span className='border border-white px-10 py-5'>{text}</span></button>
    </div>
  )
}

export default Button
