import React from 'react'

const TechStack = ({ tech }) => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <img
        src={tech.logo}
        alt={tech.name}
        className='w-8 h-8 2xl:w-14 2xl:h-14 lg:h-12 lg:w-12'
      />
      <span className='mt-2 text-xs font-semibold text-center lg:text-sm text-nowrap '>
        {tech.name}
      </span>
    </div>
  )
}

export default TechStack
