import { motion } from 'framer-motion'
import { useState } from 'react'
import ExperienceCard from './ExperienceCard'
const experienceData = [
  {
    name: 'Frontend Developer',
    time: '07-2023 - 11-2023',
    company: 'Utilities Save',
    description:
      'Worked on developing and optimizing frontend applications for better user experience.',
  },
  {
    name: 'Full Stack Developer',
    time: '07-2024 - 08-2024',
    company: 'India SME Forum',
    description:
      'Built and maintained full-stack web applications for business process automation.',
  },
  {
    name: 'Full Stack Developer',
    time: '08-2024 - Present', 
    company: 'Spark Eighteen',
   
  },
]

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null)

  const openModal = (experience) => {
    setSelectedExperience(experience)
  }

  const closeModal = () => {
    setSelectedExperience(null)
  }

  return (
    <div className='flex flex-col gap-4'>
      {experienceData.map((elem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5 * index + 1,
            ease: 'easeOut',
          }}
          className='lg:w-4/5 border-b-2 border-accent dark:border-darkAccent'
        >
          <div
            onClick={() => openModal(elem)}
            className='flex items-center justify-between py-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:bg-accent dark:hover:bg-darkAccent hover:text-primary dark:hover:text-darkPrimary p-4'
          >
            <h2 className='lg:text-2xl text-xl'>{elem.name}</h2>
            <h3 className='lg:text-lg'>{elem.time}</h3>
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      {selectedExperience && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
          onClick={closeModal} // Close when clicking outside
        >
          <ExperienceCard
            closeModal={closeModal}
            selectedExperience={selectedExperience}
          />
        </div>
      )}
    </div>
  )
}

export default ExperienceSection
