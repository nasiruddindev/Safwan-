import React from 'react'

const Subtitle = ({text,className,icon}) => {
  return (
    <div className={`flex items-center gap-x-3 ${icon}`}>
      <div className='flex items-center'>
        <div className='h-[2px] w-10 bg-red-500'></div>
        <div className='h-2 w-2 rounded-full bg-red-500'></div>
      </div>
    <h6 className={`text-secondary font-lg font-vollkorn font-medium ${className}`}>{text}</h6>
    </div>
  )
}

export default Subtitle
