import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='bg-secondary text-white px-1 py-4 md:py-6'><span className='text-base md:text-lg border border-white px-5 md:px-10 py-3 md:py-5'>{text}</span></button>
    </div>
  )
}

export default Button
