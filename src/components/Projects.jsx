import { motion } from 'motion/react'
import ProjectSection from './ProjectSection'
const Projects = () => {
  return (
    <div className='flex flex-col items-center h-screen '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        className='flex flex-col md:w-[90%] w-[85%] gap-4  '
      >
        <h2 className='text-lg 2xl:text-2xl lg:text-xl'>Featured Works</h2>
        <div className='w-full h-[2px] bg-primary'></div>
      </motion.div>
      <div className='flex flex-col md:w-[90%] w-[85%] gap-4 py-16 '>
        <ProjectSection />
      </div>
    </div>
  )
}

export default Projects
