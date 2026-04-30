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
    <section className='pt-[110px]'>
      <Container>
        <Flex className="justify-center items-center">
          <div className='w-5/12'>
          <div className='w-[95%] h-[580px] bg-red-500'>
            <Image src={Photo} className="h-full"/>
          </div>
          </div>
          <div className='w-7/12'>
          <Subtitle text="Get In Touch"/>
          <Title text="Feel Free to Contact"/>

          <Grid className="grid-cols-2 mt-10 gap-x-[70px] gap-y-[57px]">
            <ContactInput type="text" placeholder="Enter Name" className="w-full"/>
            <ContactInput type="email" placeholder="Enter Email" className="w-full"/>
            <ContactInput type="number" placeholder="Phone" className="w-full"/>
            <ContactInput type="text" placeholder="Subject" className="w-full"/>
          </Grid>
            <ContactInput type="text" placeholder="Subject" className="w-full mt-[57px]"/>

            <div className="mt-[50px]">
              <Button text="Contact Us" />
            </div>

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact
