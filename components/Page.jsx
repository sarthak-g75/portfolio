import React from 'react'

const Page = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {children}
    </div>
  )
}

export default Page
