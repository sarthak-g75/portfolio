import InfiniteBanner from './InfiniteBanner'
import { motion } from 'motion/react'
import VerticalLines from './VerticalLines'
const text = 'Let’s Create Something Great '
const Footer = () => {
  return (
    <footer className='w-full h-screen overflow-hidden bg-black'>
      <div className='lg:hidden'>
        <InfiniteBanner text={text} />
      </div>
      <div className='flex flex-col '>
        {text.split(' ').map((elem, index) => {
          return (
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className='text-primary 2xl:text-[150px] lg:text-[100px] hidden lg:block font-bold'
            >
              {elem}
            </motion.h3>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
