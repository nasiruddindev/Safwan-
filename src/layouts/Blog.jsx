import React from 'react'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Grid from '../components/Grid'
import ProCard from '../components/ProCard'
import Photo from "../assets/banner.JPG"

const Blog = () => {
  let date=new Date();
  let time=date.toLocaleTimeString()
  return (
    <section className='py-[70px] lg:py-[120px]'>
      <Container>
        <div className='w-[100vw] xl:w-full'>
          <Subtitle text="Latest Blogs" icon="justify-center"/>
        <Title text="Blog & Articles" className="text-center pb-[40px]"/>
        <Grid className="md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-7 ">
          <ProCard src={Photo} subtitle="By David William" date={time} title="Quis autem vea eum iure reprehenderit." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
          <ProCard src={Photo} subtitle="By Will Doie" date={time} title="Reprehenderit in vouta
          velit esse cillum." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
          <ProCard src={Photo} subtitle="By Adam Smith" date={time} title="Soluta nobis ose aligen
          optio cumue." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
        </Grid>
        </div>
      </Container>
    </section>
  )
}

export default Blog
