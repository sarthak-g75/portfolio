import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Button from './Button'
const ProjectSection = () => {
  return (
    <div className='w-full '>
      <div className='flex flex-col justify-between lg:flex-row '>
        <div className='flex flex-col justify-between w-1/4'>
          <h3 className='text-4xl font-medium lg:text-nowrap'>
            Konnect Kitchen
          </h3>
          <div className='flex flex-col gap-4'>
            <p className='text-lg'>
              Konnect Kitchen—Delhi NCR’s one-stop shop for premium crockery &
              utensils, serving up style with a seamless shopping experience!
            </p>
            <Button text='Read More' />
          </div>
        </div>
        <Link to='/'>
          <motion.img
            initial={{ opacity: 0, y: 30 }} // Start slightly lower for a natural rise effect
            whileInView={{ opacity: 1, y: 0 }} // Moves to its normal position
            transition={{
              type: 'spring',
              stiffness: 120, // Slightly more bounce for a snappy feel
              damping: 22, // Smooth stop without feeling abrupt
              delay: 0.3, // Reduces wait time
            }}
            data-hover-text='Read More'
            viewport={{ once: true, amount: 0.3 }} // Triggers slightly sooner
            src='/demo.png'
            alt=''
            className='2xl:w-[1200px] 2xl:h-[600px] lg:w-[800px] lg:h-[400px] object-cover aspect-[1/1] cursor-pointer'
          />
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection
