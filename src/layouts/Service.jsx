import React from 'react'
import Title from '../components/Title'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Flex from '../components/Flex'
import Card from '../components/Card'
import Image from '../components/Image'
import Card1 from "../assets/card1.png"
import Card2 from "../assets/card2.png"
import Card3 from "../assets/card3.png"

const Service = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <Container>
        <div className='w-[100vw] xl:w-full'>
          <Subtitle text="MY SERVICES" className="text-center"  icon="justify-center" />
        <Title
          className="md:w-[517px] md:mx-auto text-center pb-10"
          text="Provide Wide Range of
         Digital Services"
        />
        </div>
        <div className='w-[100vw] xl:w-full'>
          <Flex className="flex-wrap justify-center xl:justify-between gap-10 xl:gap-0">
          <Card
          src={Card1}
            title="Ui/Ux Design"
            pera="Dolor repellendus tempo ribus aue
              quibusdam offi ciis debitis rerum na
                aibus minima veniam."
          />
          <Card
          src={Card2}
            title="Mobile App Design"
            pera="Dolor repellendus tempo ribus aue
              quibusdam offi ciis debitis rerum na
                aibus minima veniam."
          />
          <Card
          src={Card3}
            title="Web Design"
            pera="Dolor repellendus tempo ribus aue
              quibusdam offi ciis debitis rerum na
                aibus minima veniam."
          />
        </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Service
