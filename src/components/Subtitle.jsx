import React from 'react'

const Subtitle = ({text,className}) => {
  return (
    <div>
      <h6 className={`text-secondary font-lg font-vollkorn font-medium ${className}`}>{text}</h6>
    </div>
  )
}

export default Subtitle
