import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className="group relative bg-primary py-[221px]">
      <div className="absolute top-0 right-0 bg-banner bg-center bg-no-repeat bg-cover h-full w-0 duration-300 group-hover:w-6/12 "></div>
      <Container>
        <h1 className='text-white text-[100px] font-vollkorn font-bold leading-[110px] z-10 relative'>Hello!<br/> I’m Zarror Nibors</h1>
        <p className='text-[#ffffff80] text-[20px] font-jost font-normal w-[670px] pt-[14px] pb-[50px]'>I’am freelance <span className='text-white'>UI/UX Designer</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
        <Button text="Contact Me"/>
      </Container>
    </section>
  )
}

export default Banner
