import React from 'react'
import Image from './Image'
import { GoArrowRight } from "react-icons/go";
import Pera from './Pera';

const Card = ({title,pera,src}) => {
  return (
    <div>
      <div className="group py-[50px] px-7 shadow-lg w-[370px] cursor-pointer hover:scale-110 duration-300">
        <Image src={src} className="w-[70px] h-[70px]"/>
        <h4 className=' font-vollkorn text-primary font-extrabold text-2xl pt-6'>{title}</h4>
        <Pera className="pt-4 pb-7" text={pera}/>
        <GoArrowRight className='text-2xl group-hover:text-secondary duration-400'/>
      </div>
    </div>
  )
}

export default Card
