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
import Button from '../components/Button'
import Ux from '../assets/ux.jpg'
import Mobile from '../assets/mobile.png'
import Web from '../assets/web.png'

const Project = () => {
  return (
    <section className="mb-[120px]">
      <Container>
        <div className="w-[100vw] xl:w-full">
          <div className="sm:px-5 md:px-0">
            <Subtitle
              text="Recent Projects"
              icon="justify-center sm:justify-start"
            />
            <Flex className="justify-center sm:justify-between items-center pb-10">
              <Title text="My Recent Projects" />
              <div className="hidden sm:block">
                <div className="flex gap-x-2 items-center">
                  <div className="p-4 border hover:bg-secondary duration-500 group">
                    <GoArrowLeft className="text-2xl group-hover:text-white duration-400" />
                  </div>
                  <div className="border p-4 hover:bg-secondary duration-500 group">
                    <GoArrowRight className="text-2xl group-hover:text-white duration-400" />
                  </div>
                </div>
              </div>
            </Flex>
          </div>

          <Grid
            className="grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 lg:gap-x-5 gap-y-8 lg:gap-y-0"
          >
            <ProCard
              src={Ux}
              subtitle="Analytics, UI-Ux"
              title="Branding & Digital Video Campaign For George’s Cafe"
              pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry."
              ani="View Case Studies"
            />

            <ProCard
              src={Mobile}
              subtitle="Mobile App"
              title="Branding & Digital Video Campaign For George’s Cafe"
              pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry."
              ani="View Case Studies"
            />

            <ProCard
              src={Web}
              subtitle="Web Development"
              title="Branding & Digital Video Campaign For George’s Cafe"
              pera="Lorem Ipsum Is Simply Dummy Text Of The
          Printing And Typesetting Industry."
              ani="View Case Studies"
            />
          </Grid>
          <div className="pt-[60px] text-center">
            <Button text="Explore More" className />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Project
