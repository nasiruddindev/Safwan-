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
    <section>
      <Container>
        <Subtitle text="Latest Blogs" icon="justify-center"/>
        <Title text="Blog & Articles" className="text-center pb-[40px]"/>
        <Grid className="grid-cols-3 gap-x-[30px]">
          <ProCard src={Photo} subtitle="By David William" date={time} title="Quis autem vea eum iure reprehenderit." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
          <ProCard src={Photo} subtitle="By Will Doie" date={time} title="Reprehenderit in vouta
          velit esse cillum." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
          <ProCard src={Photo} subtitle="By Adam Smith" date={time} title="Soluta nobis ose aligen
          optio cumue." pera="Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece." ani="Read More"/>
        </Grid>
      </Container>
    </section>
  )
}

export default Blog
