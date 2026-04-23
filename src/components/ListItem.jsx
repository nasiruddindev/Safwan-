import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`font-jost font-normal text-lg text-primary hover:text-secondary duration-400 cursor-pointer list-none ${className}`}>{text}</li>
  )
}

export default ListItem
