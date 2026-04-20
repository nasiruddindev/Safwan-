import React from 'react'

const ListItem = ({text}) => {
  return (
    <li className='font-jost font-normal text-lg text-primary hover:text-secondary duration-400 cursor-pointer'>{text}</li>
  )
}

export default ListItem
