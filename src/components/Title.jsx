import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`font-vollkorn text-titleSize text-primary ${className}`}>{text}</h2>
  )
}

export default Title
