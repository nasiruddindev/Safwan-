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
    <section className="py-[100px]">
      <Container>
        <Subtitle text="MY SERVICES" className="text-center" />
        <Title
          className="w-[517px] mx-auto text-center pt-3 pb-10"
          text="Provide Wide Range of
         Digital Services"
        />
        <Flex className="justify-between">
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
      </Container>
    </section>
  )
}

export default Service
