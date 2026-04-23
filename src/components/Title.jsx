import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`font-vollkorn text-titleSize text-primary pt-[11px] ${className}`}>{text}</h2>
  )
}

export default Title
