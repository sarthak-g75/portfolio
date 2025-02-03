import React, { useState } from 'react'
import { motion } from 'motion/react'
import { scroll } from 'motion'
const Hero = () => {
  const [yProgress, setYProgress] = React.useState(0)
  // const scrollYProgress = scroll((progress) => console.log(progress))
  scroll((progress) => setYProgress(progress))
  // console.log(yProgress)
  return (
    <section className='flex flex-col items-center justify-between lg:justify-center py-16 pb-36 lg:pb-0 lg:py-0  h-[92vh] gap-4 overflow-hidden text-primary px-10 lg:px-0'>
      <div className='flex flex-col gap-4'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 1,
          }}
          className={`flex items-center justify-center gap-4 `}
          style={{ x: yProgress * 300 }}
        >
          <img
            className='w-24 h-24 2xl:w-44 2xl:h-44 lg:w-32 lg:h-32'
            src='/logo.svg'
            alt=''
          />
          <h1 className='text-3xl font-thin 2xl:text-9xl lg:text-6xl'>
            I'm Sarthak Gupta
          </h1>
        </motion.div>
        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row '>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
            className='block text-lg md:hidden lg:w-1/3 2xl:text-2xl lg:text-xl'
          >
            MERN stack developer with 1 year of professional and 3 years of
            freelance experience. I create scalable, user-centric applications
            with Next.js, blending modern design with seamless functionality to
            craft experiences that truly connect and leave a lasting impact.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 1.6,
            }}
            className='hidden text-lg md:block lg:w-1/3 2xl:text-2xl lg:text-xl'
          >
            MERN stack developer with 1 year of professional and 3 years of
            freelance experience. I create scalable, user-centric applications
            with Next.js, blending modern design with seamless functionality to
            craft experiences that truly connect and leave a lasting impact.
          </motion.p>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
            className='hidden text-3xl font-bold lg:block lg:w-1/2 2xl:text-9xl lg:text-6xl lg:text-wrap text-nowrap'
          >
            A Full Stack Developer
          </motion.h2>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ x: yProgress * -300 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 1.4,
          }}
          className='items-center justify-center hidden lg:flex '
        >
          <h1 className='text-3xl font-thin 2xl:text-9xl lg:text-6xl'>
            lives by code
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          delay: 1.4,
        }}
        className='flex flex-col lg:hidden'
      >
        <h2 className='text-3xl font-bold lg:w-1/2 2xl:text-9xl lg:text-6xl lg:text-wrap text-nowrap'>
          A Full Stack Developer
        </h2>
        <h1 className='text-3xl font-thin 2xl:text-9xl lg:text-6xl'>
          lives by code
        </h1>
      </motion.div>
    </section>
  )
}

export default Hero
