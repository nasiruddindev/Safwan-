import React from 'react'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Pera from '../components/Pera'
import Image from "../components/Image"
import Photo from "../assets/banner.JPG"
import { FaStar } from "react-icons/fa6";
import { TbCircleDotFilled } from "react-icons/tb";
import Grid from '../components/Grid'

const Client = () => {
  return (
    <section className="bg-[#F9f4F1] pt-[120px] pb-[170px]">
      <Container>
        <Subtitle text="Client Testimonial" icon="justify-center"/>
        <Title text="Feedback From Client" className="text-center"/>
        <Grid className="grid-cols-2 gap-x-[30px] pt-[40px]">
          <div>
            <div className="w-full h-2 bg-secondary"></div>
            <div className='p-10 bg-white'>
            <Pera text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry."/>
          </div>
          <div className='mt-5 flex items-center gap-x-[30px]'>
            <div className=' ml-[100px] relative h-[75px] w-[75px] rounded-full bg-red-500 after:absolute after:top-[-5px] after:left-[-5px] after:w-[85px] after:h-[85px] after:content=[""] after:border after:border-secondary after:rounded-full'>
              <Image src={Photo} className="w-full h-full rounded-full"/>
            </div>
            <div>
              <h4 className='font-vollkorn font-semibold text-[20px]'>Michale Doie</h4>
              <p className='font-jost font-normal text-sm text-[#00413db3] pb-3'>Product Designer</p>
              <div className='flex '>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div className="w-full h-2 bg-secondary"></div>
            <div className='p-10 bg-white'>
            <Pera text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry."/>
          </div>
          <div className='mt-5 flex items-center gap-x-[30px]'>
            <div className=' ml-[100px] relative h-[75px] w-[75px] rounded-full bg-red-500 after:absolute after:top-[-5px] after:left-[-5px] after:w-[85px] after:h-[85px] after:content=[""] after:border after:border-secondary after:rounded-full'>
              <Image src={Photo} className="w-full h-full rounded-full"/>
            </div>
            <div>
              <h4 className='font-vollkorn font-semibold text-[20px]'>Adam Smith</h4>
              <p className='font-jost font-normal text-sm text-[#00413db3] pb-3'>Designer</p>
              <div className='flex '>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
              </div>
            </div>
          </div>
          </div>
        </Grid>
        <div className='flex justify-center mt-[87px] gap-x-2'>
          <TbCircleDotFilled className='text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer'/>
          <TbCircleDotFilled className='text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer'/>
          <TbCircleDotFilled className='text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer'/>
        </div>
      </Container>
    </section>
  )
}

export default Client
