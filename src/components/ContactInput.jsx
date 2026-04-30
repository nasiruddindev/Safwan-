import React from 'react'

const ContactInput = ({type,placeholder,className}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={`border-b border-[#00413d1a] outline-none placeholder:text-lg placeholder:font-jost placeholder:font-normal placeholder:text-[#00413db3] p-3 ${className}`} />
    </div>
  )
}

export default ContactInput
