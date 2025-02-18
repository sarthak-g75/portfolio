import { motion } from 'framer-motion'
import Link from 'next/link'

const Image = ({ link }) => {
  return (
    <Link href={link}>
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
    </Link>
  )
}

export default Image
