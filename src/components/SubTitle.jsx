import { motion } from 'motion/react'
const SubTitle = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      className='flex flex-col md:w-[90%] w-[85%] gap-4  '
    >
      <h2 className='text-3xl font-semibold 2xl:text-4xl'>{title}</h2>
      <div className='w-full h-[2px] bg-accent dark:bg-darkAccent'></div>
    </motion.div>
  )
}

export default SubTitle
