import React from 'react'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Flex from '../components/Flex'
import { GoArrowRight } from 'react-icons/go'
import { GoArrowLeft } from 'react-icons/go'
import Card from '../components/Card'
import Grid from '../components/Grid'
import ProCard from '../components/ProCard'
import Photo from "../assets/banner.JPG"
import Button from '../components/Button'

const Project = () => {
  return (
    <section className='mb-[120px]'>
      <Container>
        <Subtitle text="Recent Projects" />
        <Flex className="justify-between items-center pb-10">
          <Title text="My Recent Projects" />
          <div className="flex gap-x-2 items-center">
            <div className="p-4 border hover:bg-secondary duration-500 group">
              <GoArrowLeft className="text-2xl group-hover:text-white duration-400" />
            </div>
            <div className="border p-4 hover:bg-secondary duration-500 group">
              <GoArrowRight className="text-2xl group-hover:text-white duration-400" />
            </div>
          </div>
        </Flex>
        <Grid className="grid-cols-3 gap-x-5">
          <ProCard src={Photo} subtitle="Analytics, UI-Ux" title="Branding & Digital Video Campaign For George’s Cafe" pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry." ani="View Case Studies"/>
          <ProCard src={Photo} subtitle="Mobile App" title="Branding & Digital Video Campaign For George’s Cafe" pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry." ani="View Case Studies"/>
          <ProCard src={Photo} subtitle="Web Development" title="Branding & Digital Video Campaign For George’s Cafe" pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry." ani="View Case Studies"/>
        </Grid>
        <div className='pt-[60px] text-center'>
          <Button text="Explore More" className/>
        </div>
      </Container>
    </section>
  )
}

export default Project
