import React from 'react'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import PortfolioList from '../components/PortfolioList'
import Flex from '../components/Flex'
import PortfolioCard from '../components/PortfolioCard'
import Grid from '../components/Grid'
import Visual from '../assets/visual.jpg'
import Wapp from '../assets/wapp.jpg'
import Motion from '../assets/motion.jpg'
import E from '../assets/e.jpg'

const Portfolio = () => {
  return (
    <section className="pb-[80px] md:pb-[120px]">
      <Container>
        <div className='w-[100vw] xl:w-full'>
          <Subtitle text="My Portfolio" icon="justify-center"/>
        <Title text="My Work Example" className="text-center pb-6"/>

        <Flex className="justify-center gap-x-3 sm:gap-x-[30px]">
          <PortfolioList text="All"/>
        <PortfolioList text="Branding"/>
        <PortfolioList text="Photography"/>
        <PortfolioList text="Fashion"/>
        <PortfolioList text="Product"/>
        </Flex>
        <Grid className="grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-[30px] mt-10">
          <PortfolioCard src={Motion} title="Motion Graphics" pera="Website"/>
          <PortfolioCard src={E} title="E-Learning App" pera="IOS App"/>
          <PortfolioCard src={Wapp} title="Web Application" pera="Desktop"/>
          <PortfolioCard src={Visual} title="Visual Design" pera="Desktop "/>
        </Grid>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio
