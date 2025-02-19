import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'motion/react'
import { scroll } from 'motion'
const Hero = () => {
  const [yProgress, setYProgress] = useState(0)
  const { scrollYProgress } = useScroll()
  // console.log(scrollYProgress)
  useEffect(() => {
    // Subscribe to scrollYProgress changes
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setYProgress(latest)
    })
    // Cleanup the subscription on unmount
    return unsubscribe
  }, [scrollYProgress])
  // const scrollYProgress = scroll((progress) => console.log(progress))
  // scroll((progress) => setYProgress(progress))
  // console.log(yProgress)
  return (
    <section className='flex flex-col items-center justify-between lg:justify-center py-10 pb-20 lg:pb-0 lg:py-0 h-[75vh] lg:h-[80vh] gap-4 overflow-hidden px-10 lg:px-0'>
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
          style={{ x: yProgress * 600 }}
        >
          <img
            // width={28}
            // height={28}
            className='object-cover rounded-full w-28 h-28 2xl:w-52 2xl:h-52 lg:w-28 lg:h-28'
            src='/pf.jpg'
            // src='/lightLogo.svg'
            alt='logo'
          />
          <h1 className='text-2xl 2xl:text-9xl lg:text-6xl'>
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
            className='hidden text-lg lg:text-right 2xl:text-left md:block lg:w-1/3 2xl:text-2xl lg:text-lg'
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
            className='hidden text-3xl font-semibold lg:block 2xl:w-1/2 2xl:text-9xl lg:text-6xl '
          >
            A Full Stack Developer
          </motion.h2>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ x: yProgress * -600 }}
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
        style={{ x: yProgress * -300 }}
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
