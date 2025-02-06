import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text }) => {
  return (
    <Link to='/'>
      <div className='2xl:px-6 lg:px-4 px-2  font-semibold 2xl:text-lg lg:text-sm py-2 transition-all duration-300 rounded-sm ease-in-out border-[2px] border-primary w-max bg-accent hover:text-accent hover:bg-primary hover:scale-105'>
        {text}
      </div>
    </Link>
  )
}

export default Button
