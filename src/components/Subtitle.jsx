import React from 'react'

const Subtitle = ({text,className,icon}) => {
  return (
    <div className={`flex items-center gap-x-3 ${icon}`}>
      <div className='flex items-center'>
        <div className='h-[2px] w-10 bg-red-500'></div>
        <div className='h-2 w-2 rounded-full bg-red-500'></div>
      </div>
      {/* <div className='relative'>
      <div className='flex items-center after:top-[-8px] after:right-2 after:absolute after:bg-red-500 after:contents-none after:h-3 after:w-3 after:rounded-full    before:absolute before:top-[-4px] before:right-5 before:bg-red-500 before:w-10 before:h-1 before:content-""'></div>
    </div> */}
    <h6 className={`text-secondary font-lg font-vollkorn font-medium ${className}`}>{text}</h6>
    </div>
  )
}

export default Subtitle
