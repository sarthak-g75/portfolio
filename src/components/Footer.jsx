import InfiniteBanner from './InfiniteBanner'
import { motion } from 'motion/react'
import VerticalLines from './VerticalLines'
import FooterText from './FooterText'
import Socials from './Socials'
const text = 'Let’s Create Something Great '
const Footer = () => {
  return (
    <footer className='flex flex-col justify-between w-full h-screen overflow-hidden bg-black text-primary lg:flex-row'>
      <div className='lg:hidden'>
        <InfiniteBanner text={text} />
      </div>
      <div className='flex-col hidden lg:flex '>
        {text.split(' ').map((elem, index) => {
          return (
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className=' 2xl:text-[150px] lg:text-[100px]  font-bold'
            >
              {elem}
            </motion.h3>
          )
        })}
      </div>
      <div className='flex flex-col items-start h-full p-10 lg:p-20 lg:justify-evenly'>
        <div className='lg:w-2/3'>
          <FooterText />
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <h2 className='text-4xl font-bold'>Social Links: </h2>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default Footer
