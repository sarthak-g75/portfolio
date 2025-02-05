import { Link } from 'react-router-dom'
import { easeInOut, motion } from 'motion/react'

const name = 'Sarthak Gupta'
const links = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: '/' },
  { name: 'Contact', path: '/' },
]
const delay = 0.5
const Navbar = () => {
  return (
    <nav className='relative   h-[8vh] flex items-center lg:px-10 px-4'>
      <div className='flex items-center justify-between w-full'>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className='text-lg font-semibold 2xl:text-2xl text-nowrap lg:text-xl'
        >
          {name}
        </motion.h2>
        <div className='flex gap-4 text-lg font-medium lg:gap-8'>
          {links.map((link, index) => (
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: easeInOut,
                delay: delay * (index + 1),
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                key={link.name}
                to={link.path}
                className='text-text '
              >
                {link.name}
              </Link>
            </motion.h2>
          ))}
        </div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='absolute bottom-0 w-full h-[2px] left-0 bg-primary'
        />
      </div>
    </nav>
  )
}

export default Navbar
