import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Button from './Button'
import AutoCarousel from './AutoCarousel'
const ProjectSection = ({ elem, index }) => {
  const { title, description, buttonText, link, img } = elem
  return (
    <div className='w-full '>
      <div className='flex flex-col justify-between lg:flex-row '>
        <div className='flex flex-col justify-between '>
          <motion.h3
            initial={{ opacity: 0, x: -30 }} // Start slightly lower for a natural rise effect
            whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position
            transition={{
              type: 'spring',
              stiffness: 120, // Slightly more bounce for a snappy feel
              damping: 22, // Smooth stop without feeling abrupt
              delay: 0.3, // Reduces wait time
            }}
            viewport={{ once: true }}
            className='font-medium 2xl:text-4xl lg:text-3xl lg:text-nowrap'
          >
            {title}
          </motion.h3>
          <div className='flex flex-col gap-4'>
            <motion.p
              initial={{ opacity: 0, x: -30 }} // Start slightly lower for a natural rise effect
              whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position
              transition={{
                type: 'spring',
                stiffness: 120, // Slightly more bounce for a snappy feel
                damping: 22, // Smooth stop without feeling abrupt
                delay: 0.6, // Reduces wait time
              }}
              viewport={{ once: true }}
              className='2xl:text-lg lg:text-sm 2xl:w-[400px] lg:w-[300px]'
            >
              {description}
            </motion.p>
            <motion.div
              data-hover-text='Explore'
              initial={{ opacity: 0, x: -30 }} // Start slightly lower for a natural rise effect
              whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position
              transition={{
                type: 'spring',
                stiffness: 120, // Slightly more bounce for a snappy feel
                damping: 22, // Smooth stop without feeling abrupt
                delay: 0.9, // Reduces wait time
              }}
              viewport={{ once: true }}
            >
              <Button text={buttonText} />
            </motion.div>
          </div>
        </div>
        {/* <Link to={link}>
          <motion.img
            initial={{ opacity: 0, x: 30 }} // Start slightly lower for a natural rise effect
            whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position
            transition={{
              type: 'spring',
              stiffness: 120, // Slightly more bounce for a snappy feel
              damping: 22, // Smooth stop without feeling abrupt
              delay: 0.5, // Reduces wait time
            }}
            data-hover-text='Read More'
            viewport={{ once: true, amount: 0.3 }} // Triggers slightly sooner
            src='/demo.png'
            alt=''
            className='2xl:w-[1200px] 2xl:h-[600px] lg:w-[800px] lg:h-[400px] object-cover aspect-[1/1] cursor-pointer'
          />
        </Link> */}
        <AutoCarousel
          link={link}
          images={img}
        />
      </div>
    </div>
  )
}

export default ProjectSection
