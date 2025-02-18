import { motion } from 'motion/react'

const ContactPara = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className='text-lg lg:w-1/3 2xl:text-3xl lg:text-xl'
    >
      Have an idea that's out of this world? 🚀 Need a website that's smoother
      than your morning coffee? ☕ Drop me a message
    </motion.p>
  )
}

export default ContactPara
