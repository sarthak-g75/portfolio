// import { useState } from 'react'
import { motion } from 'motion/react'
// import { scroll } from 'motion'
const InfiniteBanner = ({ text }) => {
  //   const [yProgress, setYProgress] = useState(0)
  //   scroll((progress) => setYProgress(progress))
  return (
    <motion.div
      //   style={{ y: yProgress * 200 }}
      className=' whitespace-nowrap'
      initial={{ x: 0 }}
      animate={{ x: '-100%' }} // Moves left infinitely
      transition={{ ease: 'linear', duration: 10, repeat: Infinity }} // Smooth infinite animation
    >
      <h3 className='inline-block font-bold text-primary text-[100px]'>
        {text} • {text} • {text} • {text}
      </h3>
    </motion.div>
  )
}

export default InfiniteBanner
