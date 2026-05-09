import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Button from '../components/Button'
import Photo from "../assets/banner.JPG"
import Image from '../components/Image'
import Grid from '../components/Grid'
import AboutProg from '../components/AboutProg'

const About = () => {
  return (
    <section className="pt-[88px] pb-[80px] lg:pb-[120px]">
      <Container>


          <Flex className="flex-col-reverse   lg:flex-row flex-wrap  items-center">



          <Flex className="lg:w-1/2 flex-wrap gap-x-[30px] gap-y-6 lg:gap-y-0">
            <div className="mx-auto h-[480px] w-[370px] lg:w-[300px] xl:w-[370px] ">
              <Image src={Photo} className="w-full h-full"/>
            </div>



            <Flex className="mx-auto flex-col gap-y-[30px]">


              <div className="w-[370px] h-[480px] lg:w-[170px] lg:h-[225px]">
                <Image src={Photo} className="w-full h-full"/>
              </div>


              <div className="hidden lg:block w-[170px] h-[225px]">
                <Image src={Photo} className="w-full h-full"/>
              </div>

            </Flex>
          </Flex>


          <div className='lg:w-1/2 px-3 md:px-[30px] lg:px-0 lg:pl-[30px] pb-10 lg:pb-0'>
            <Subtitle text="About Me" icon="justify-center lg:justify-start" />
            <Title
            className="leading-[50px]  text-center lg:text-left md:leading-[56px]"
              text="I Enjoy Solving Problems
               With Scalable Solutions"
            />
            <Pera
            className="pb-[50px] text-center lg:text-left pt-5 md:pt-0"
              text="Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi               tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.

              Modi tempora incidunt ut lao magnam aliquam               quaerat voluptatem
              reprehenderit non numquam eius."
            />
            <div className='text-center lg:text-left'>
              <Button text="Download CV"/>
            </div>
          </div>
        </Flex>


        <Grid className="grid-cols-1 mt-10  gap-y-10 sm:grid-cols-2 md:gap-y-0 md:grid-cols-4 md:gap-x-[10px] lg:gap-x-[30px] md:mt-[80px]">
          <AboutProg number="70%" text="Graphics Design"/>
          <AboutProg number="85%" text="Web Designing"/>
          <AboutProg number="60%" text="Brand Design"/>
          <AboutProg number="40%" text="Web Development"/>
        </Grid>
      </Container>
    </section>
  )
}

export default About
