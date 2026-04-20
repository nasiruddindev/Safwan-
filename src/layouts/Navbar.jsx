import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from "../assets/logo.png"
import ListItem from '../components/ListItem'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className='py-4'>
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <Image src={Logo}/>
          </div>
          <div>
            <ul className='flex gap-x-12'>
              <ListItem text="Home"/>
              <ListItem text="Page"/>
              <ListItem text="Service"/>
              <ListItem text="Blog"/>
              <ListItem text="Contact"/>
            </ul>
          </div>
          <div>
            <Button text="Download CV"/>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
