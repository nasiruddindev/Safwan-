import React from 'react'
import Image from './Image'

const Card = ({title,pera,src}) => {
  return (
    <div>
      <div className="py-[50px] px-7 shadow-lg w-[95%]">
        <Image src={src}/>
        <h4 className='font-vollkorn text-primary font-extrabold text-2xl pt-6'>{title}</h4>
        <p className='text-base font-jost font-normal text-primary pt-4 pb-7'>{pera}</p>
      </div>
    </div>
  )
}

export default Card
