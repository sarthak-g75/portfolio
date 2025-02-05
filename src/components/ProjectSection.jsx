import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
const text = 'Konnect Kitchen'
const ProjectSection = () => {
  const [displayedText, setDisplayedText] = useState('')
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const scrambleTime = 50 // Speed of scrambling (ms per frame)
  const finalDelay = 100 // Delay before the final reveal

  useEffect(() => {
    let currentText = Array(text.length).fill(' ')
    let progress = 0

    const interval = setInterval(() => {
      if (progress < text.length) {
        for (let i = progress; i < text.length; i++) {
          currentText[i] = chars[Math.floor(Math.random() * chars.length)]
        }
        setDisplayedText(currentText.join(''))
      } else {
        clearInterval(interval)
        setTimeout(() => setDisplayedText(text), finalDelay)
      }
      progress++
    }, scrambleTime)

    return () => clearInterval(interval)
  }, [text])
  return (
    <div className='w-full '>
      <div className='flex flex-col justify-between lg:flex-row '>
        <div className='flex flex-col justify-between w-1/4'>
          <h3 className='text-4xl font-medium'>{displayedText}</h3>
          <p className='text-lg'>
            Konnect Kitchen—Delhi NCR’s one-stop shop for premium crockery &
            utensils, serving up style with a seamless shopping experience!
          </p>
        </div>
        <img
          data-hover-text='Read More'
          src='/demo.png'
          alt=''
          className='lg:w-[1200px] lg:h-[600px] object-cover aspect-[1/1]'
        />
      </div>
    </div>
  )
}

export default ProjectSection
