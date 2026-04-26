import React from 'react'

const AboutProg = ({number,text}) => {
  return (
    <div
      className="shadow-lg flex
    flex-col items-center gap-y-6 px-5 py-5"
    >
      <div className="relative overflow-hidden h-[160px] w-[160px] flex justify-center items-center rounded-full after:absolute after:w-2/3 after:h-[150%] after:bg-secondary after:content-[''] after:animate-spin    before:inset-2 before:absolute before:rounded-full before:bg-white before:z-10 before:content-['']">
        <span className="text-[34px] font-vollkorn font-semibold  text-secondary z-10">
          {number}
        </span>
      </div>
      <h4 className="font-vollkorn font-semibold text-[26px] text-primary">
        {text}
      </h4>
    </div>
  )
}

export default AboutProg
