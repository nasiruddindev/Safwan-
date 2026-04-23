import React from 'react'
import Image from './Image'

const PortfolioCard = ({src,title,pera}) => {
  return (
    <div>
      <Image src={src} className="w-full h-[420px]"/>
      <div className='w-full bg-primary px-5 py-5'>
        <h4 className='font-vollkorn font-semibold text-2xl text-white'>{title}</h4>
        <p className='font-jost text-base font-normal text-[#ffffffb3]'>{pera}</p>
      </div>
    </div>
  )
}

export default PortfolioCard
