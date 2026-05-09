import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Photo from "../assets/banner.JPG"
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import ContactInput from '../components/ContactInput'
import Grid from '../components/Grid'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className='pt-[70px] lg:pt-[110px]'>
      <Container>


          <Flex className="flex-wrap justify-center items-center">


          <div className='md:w-5/12'>
          <div className='mx-auto md:mx-0 w-[95%] h-[580px] md:h-[450px] lg:h-[580px] bg-red-500'>
            <Image src={Photo} className="h-full"/>
          </div>
          </div>


          <div className='md:w-7/12 mt-10 md:mt-0'>
          <Subtitle text="Get In Touch" icon="justify-center md:justify-start"/>
          <Title text="Feel Free to Contact" className="text-center md:text-left"/>

          <Grid className="grid-cols-2 mt-10 gap-x-[30px] sm:gap-x-[70px] md:gap-x-[30px] gap-y-[57px] md:gap-y-[20px] lg:gap-y-[57px]">
            <ContactInput type="text" placeholder="Enter Name" className="w-full"/>
            <ContactInput type="email" placeholder="Enter Email" className="w-full"/>
            <ContactInput type="number" placeholder="Phone" className="w-full"/>
            <ContactInput type="text" placeholder="Subject" className="w-full"/>
          </Grid>
            <ContactInput type="text" placeholder="Subject" className="w-full mt-[57px]"/>

            <div className="mt-[50px] md:mt-[20px] lg:mt-[50px] text-center md:text-start">
              <Button text="Contact Us" />
            </div>

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact
