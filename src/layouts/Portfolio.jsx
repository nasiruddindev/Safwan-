import React from 'react'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import PortfolioList from '../components/PortfolioList'
import Flex from '../components/Flex'
import PortfolioCard from '../components/PortfolioCard'
import Photo from "../assets/banner.JPG"
import Grid from '../components/Grid'

const Portfolio = () => {
  return (
    <section className="pb-[120px]">
      <Container>
        <Subtitle text="My Portfolio" icon="justify-center"/>
        <Title text="My Work Example" className="text-center pb-6"/>

        <Flex className="justify-center gap-x-[30px]">
          <PortfolioList text="All"/>
        <PortfolioList text="Branding"/>
        <PortfolioList text="Photography"/>
        <PortfolioList text="Fashion"/>
        <PortfolioList text="Product"/>
        </Flex>
        <Grid className="grid-cols-2 gap-[30px] mt-10">
          <PortfolioCard src={Photo} title="Motion Graphics" pera="Website"/>
          <PortfolioCard src={Photo} title="E-Learning App" pera="IOS App"/>
          <PortfolioCard src={Photo} title="Web Application" pera="Desktop"/>
          <PortfolioCard src={Photo} title="Visual Design" pera="Desktop "/>
        </Grid>
      </Container>
    </section>
  )
}

export default Portfolio
