import React from 'react'
import Link from 'next/link'

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target='_blank'
    >
      <div className='2xl:px-6 lg:px-4 px-2  font-semibold 2xl:text-lg lg:text-sm py-2 transition-all duration-300 rounded-sm ease-in-out border-[2px] dark:border-darkAccent w-max hover:bg-accent hover:text-primary border-accent dark:hover:text-darkPrimary dark:hover:bg-darkAccent hover:scale-105'>
        {text}
      </div>
    </a>
  )
}

export default Button
