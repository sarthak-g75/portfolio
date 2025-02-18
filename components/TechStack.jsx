import { motion } from 'motion/react'
const TechStack = ({ tech, index }) => {
  // console.log(index)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 * index }}
      className='flex flex-col items-center justify-center '
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className='w-8 h-8 2xl:w-14 2xl:h-14 lg:h-12 lg:w-12'
      />
      <span className='mt-2 text-xs font-semibold text-center lg:text-sm text-nowrap '>
        {tech.name}
      </span>
    </motion.div>
  )
}

export default TechStack
