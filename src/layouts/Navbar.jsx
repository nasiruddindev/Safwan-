import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from "../assets/logo.png"
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import { MdMenu } from "react-icons/md";
import { useState } from 'react'
import Banner from "../layouts/Banner"

const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false)


  return (
    <nav className='py-4'>
      <Container>

        <div className='w-[100vw] px-5 lg:px-0 xl:w-full'>
          <Flex className="justify-between items-center">
          <div>
            <Image src={Logo}/>
          </div>


          <div className={`md:static absolute duration-300 ${showMenu ?  "top-[70px]" : "top-[-100%]"}  left-0 w-full md:w-auto bg-white z-10 text-center `}>


            <ul className='flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12 gap-y-5 py-5'>
              <ListItem text="Home"/>
              <ListItem text="Page"/>
              <ListItem text="Service"/>
              <ListItem text="Blog"/>
              <ListItem text="Contact"/>
              <div className='md:hidden'><Button text="Download CV"/></div>
            </ul>
          </div>
          <div>
            <Button className='hidden md:block' text="Download CV"/>
            <MdMenu onClick={()=> setShowMenu(!showMenu)} className='text-3xl text-primary md:hidden  cursor-pointer'/>
          </div>
        </Flex>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
