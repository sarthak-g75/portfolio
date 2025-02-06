import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text }) => {
  return (
    <Link to='/'>
      <div className='px-6 py-2 transition-all duration-300 ease-in-out border-2 border-primary w-max bg-accent hover:text-accent hover:bg-primary hover:scale-105'>
        {text}
      </div>
    </Link>
  )
}

export default Button
