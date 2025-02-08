import { motion } from 'motion/react'
const AboutImage = () => {
  return (
    <motion.img
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      src='/pf2.jpg'
      alt='about'
      className='2xl:w-[400px] w-[300px] lg:[380px]   object-contain'
    />
  )
}

export default AboutImage
