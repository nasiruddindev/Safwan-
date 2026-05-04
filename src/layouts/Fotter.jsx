import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/fotter.png'
import FotterList from '../components/FotterList'
import Flex from '../components/Flex'
import { AiOutlineSkype } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { SiBehance } from "react-icons/si";

const Fotter = () => {
  return (
    <section className='py-[80px] bg-primary'>
      <Container>
        <div className='w-[100vw] xl:w-full'>
          <Image src={Logo} className="mx-auto"/>
        <Flex className="flex-wrap justify-center">
          <FotterList text="Home"/>
          <FotterList text="About"/>
          <FotterList text="Service"/>
          <FotterList text="Portfolio"/>
          <FotterList text="Blog"/>
          <FotterList text="Contact" className="border-none"/>
        </Flex>
        <Flex className="justify-center mt-[50px] gap-x-5">
          <div className='bg-secondary rounded-full p-4'><AiOutlineSkype className='text-white text-[34px]'/></div>
          <div className='bg-secondary rounded-full p-4'><FaInstagram className='text-white text-[34px]'/></div>
          <div className='bg-secondary rounded-full p-4'><SiBehance className='text-white text-[34px] '/></div>
        </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Fotter
