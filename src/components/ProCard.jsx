import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Pera from './Pera'
import { GoArrowRight } from 'react-icons/go'

const ProCard = ({ src,subtitle,title,pera,ani,date }) => {
  return (
    <div className='group cursor-pointer shadow-xl rounded-md overflow-hidden'>
      <Image src={src} className="w-full h-[270px]" />
     <div className='p-[30px]'>
       <Flex className="justify-between">
        <h4 className={`text-base font-vollkorn font-medium text-secondary`}>{subtitle}</h4>
        <h5>{date}</h5>
      </Flex>
      <h2 className={`font-vollkorn font-medium text-2xl text-primary py-[10px]`}>{title}</h2>
      <Pera
      className="w-[289px]"
        text={pera}
      />
      <div className='flex items-center gap-x-2 pt-5 group-hover:text-secondary duration-400'>
        <h6 className='font-jost font-medium text-lg'>{ani}</h6>
        <GoArrowRight className="text-2xl" />
      </div>
     </div>
    </div>
  )
}

export default ProCard
