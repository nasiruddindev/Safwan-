import React from 'react'
import Image from './Image'
import { GoArrowRight } from 'react-icons/go'

const PortfolioCard = ({src,title,pera}) => {
  return (
    <div className='mx-auto w-[350px] md:w-full'>
      <div className='group relative cursor-pointer'>
        <Image src={src} className="w-full h-[420px]"/>
        <div className='hidden md:block absolute top-0 left-0 w-0 h-full group-hover:bg-[#00413d66] group-hover:w-full duration-300'>




        </div>
         <div className='hidden md:block'>
          <div className='opacity-0 absolute top-0 left-0  w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group-hover:opacity-100 group-hover:left-[85%] group-hover:top-[10px] duration-300'>


          <GoArrowRight className='text-3xl text-secondary'/>


        </div>
         </div>


      </div>



      <div className='w-full bg-primary px-5 py-5'>
        <h4 className='font-vollkorn font-semibold text-2xl text-white'>{title}</h4>
        <p className='font-jost text-base font-normal text-[#ffffffb3]'>{pera}</p>
      </div>
    </div>
  )
}

export default PortfolioCard
