import { motion } from 'motion/react'
import ProjectSection from './ProjectSection'
import { projectData } from '../assets/projectData'
import SubTitle from './SubTitle'
const Projects = () => {
  return (
    <div
      className='flex flex-col items-center scroll-mt-10'
      id='projects'
    >
      <SubTitle title='Featured Work' />
      <div className='flex flex-col md:w-[90%] w-[85%] gap-20 lg:gap-40 py-16 '>
        {projectData.map((elem, index) => {
          return (
            <ProjectSection
              elem={elem}
              key={index}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
