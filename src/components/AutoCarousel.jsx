import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const AutoCarousel = ({ link, images }) => {
  const [index, setIndex] = useState(0)
  const carouselRef = useRef(null)
  const isInView = useInView(carouselRef, { once: false, margin: '-50px' })
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView, images.length])

  return (
    <Link
      to={link}
      className='relative flex justify-center w-full h-auto overflow-hidden '
      ref={carouselRef}
    >
      <div
        data-hover-text='Read More'
        className=''
      >
        <motion.img
          key={index} // Forces re-animation on image change
          src={images[index]}
          alt='Carousel Image'
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          exit={{ opacity: 0, x: -30 }} // Smooth exit animation
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className='2xl:w-[1200px] 2xl:h-[600px] lg:w-[800px] lg:h-[400px] w-[500px] h-[200px] object-contain aspect-[1/1] cursor-pointer '
        />
      </div>
    </Link>
  )
}

export default AutoCarousel
