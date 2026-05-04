import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={className}>
      <button className='bg-secondary text-white px-1 py-4 lg:py-6'><span className='text-base lg:text-lg border border-white px-5 lg:px-10 py-3 lg:py-5'>{text}</span></button>
    </div>
  )
}

export default Button
