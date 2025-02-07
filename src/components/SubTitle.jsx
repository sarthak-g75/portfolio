import { motion } from 'motion/react'
const SubTitle = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      className='flex flex-col md:w-[90%] w-[85%] gap-4  '
    >
      <h2 className='text-3xl font-semibold 2xl:text-4xl'>{title}</h2>
      <div className='w-full h-[2px] bg-primary'></div>
    </motion.div>
  )
}

export default SubTitle
