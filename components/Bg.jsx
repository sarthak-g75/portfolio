import React from 'react'

const Bg = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-primary dark:bg-darkPrimary -z-10'>
      <div className='flex justify-between '>
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className='w-[1px] h-screen bg-accent dark:bg-darkAccent opacity-5'
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Bg
