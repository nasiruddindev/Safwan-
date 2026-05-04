import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className="group relative bg-primary py-[100px] lg:py-[221px]">

      
      <div className="hidden lg:block absolute bottom-0 right-0 bg-banner  bg-no-repeat bg-cover h-full w-0 duration-300 group-hover:w-6/12 "></div>

      <Container>
        <div className="w-[100vw] xl:w-full">
          <h1 className=" z-10 relative text-white font-vollkorn font-bold text-center lg:text-left text-[40px] md:text-[50px] md:leading-[70px] lg:text-[100px] leading-[60px] lg:leading-[110px] ">
            Hello!
            <br />
            I’m Zarror Nibors
          </h1>

          <p className="text-[#ffffff80] text-[20px] font-jost font-normal pt-[14px] pb-[50px] text-center lg:text-left lg:w-[670px] ">
            I’am freelance <span className="text-white">UI/UX Designer</span>{' '}
            based in Indonesia who loves to craft attractive design experiences
            for the web.
          </p>
        </div>

        <div className="w-[100vw] text-center lg:text-left">
          <Button text="Contact Me" />
        </div>
      </Container>
    </section>
  )
}

export default Banner
