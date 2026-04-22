import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Button from '../components/Button'

const About = () => {
  return (
    <section className="pt-[88px] pb-[120px]">
      <Container>
        <Flex className="justify-between items-center gap-x-[30px]">
          <div className="flex gap-x-[30px] items-center">
            <div className="h-[480px] w-[370px] bg-red-500"></div>
            <div className="flex flex-col gap-y-[30px]">
              <div className="bg-yellow-400 w-[170px] h-[225px]"></div>
              <div className="bg-yellow-400 w-[170px] h-[225px]"></div>
            </div>
          </div>
          <div>
            <Subtitle text="About Me" />
            <Title
            className="leading-[56px]"
              text="I Enjoy Solving Problems
               With Scalable Solutions"
            />
            <Pera
            className="pb-[50px]"
              text="Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi               tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.

              Modi tempora incidunt ut lao magnam aliquam               quaerat voluptatem
              reprehenderit non numquam eius."
            />
            <Button text="Download CV"/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default About
