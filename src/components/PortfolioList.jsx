import React from 'react'

const PortfolioList = ({text,className}) => {
  return (
    <div>
      <li className={`relative list-none text-base font-vollkorn text-center text-primary after:absolute after:top-6 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:content-"" cursor-pointer  hover:after:w-full hover:after:duration-500`}>{text}</li>
    </div>
  )
}

export default PortfolioList
