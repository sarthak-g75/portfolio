import { motion } from 'motion/react'
const ExperienceCard = ({ selectedExperience, closeModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='w-96 bg-accent dark:bg-darkAccent rounded-lg shadow-lg relative p-6 text-primary dark:text-darkPrimary'
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className='absolute top-2 right-2 text-gray-500 hover:text-black text-2xl'
      >
        ❌
      </button>

      {/* Modal Content */}
      <h2 className='text-xl text-primary dark:text-darkPrimary font-bold'>
        {selectedExperience.name}
      </h2>
      <h3 className='text-md text-opacity-55'>{selectedExperience.time}</h3>
      <h4 className='text-md  font-semibold text-opacity-15 mt-2'>
        {selectedExperience.company}
      </h4>
      <p className='mt-4 '>{selectedExperience.description}</p>
    </motion.div>
  )
}

export default ExperienceCard
