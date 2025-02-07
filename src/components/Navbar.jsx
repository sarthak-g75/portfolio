// import { Link } from 'react-router-dom'
// import { Link as ScrollLink } from 'react-scroll'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { easeInOut, motion } from 'motion/react'

const name = 'Sarthak Gupta'
const links = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: '/contact-me', nav: true },
]
const delay = 0.5
const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollLinkClick = (to) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document
          .getElementById(to)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 500) // Adjust delay if needed
    } else {
      document
        .getElementById(to)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <nav className='relative   h-[8vh] flex items-center lg:px-10 px-4'>
      <div className='flex items-center justify-between w-full'>
        <Link
          to='/'
          smooth={true}
          duration={500}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className='text-lg font-semibold cursor-pointer 2xl:text-2xl text-nowrap lg:text-xl'
          >
            {name}
          </motion.h2>
        </Link>
        <div className='flex gap-4 text-lg font-medium lg:gap-8'>
          {links.map((link, index) =>
            link.nav ? (
              <Link
                key={link.name}
                to={link.to}
                className='transition-all duration-300 text-text hover:scale-110'
              >
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: easeInOut,
                    delay: delay * (index + 1),
                  }}
                  className='cursor-pointer'
                >
                  {link.name}
                </motion.h2>
              </Link>
            ) : (
              <div
                // smooth={true}
                // duration={500}
                // offset={-50}
                // key={link.name}
                // to={link.to}
                onClick={() => handleScrollLinkClick(link.to)}
                className='transition-all duration-300 text-text hover:scale-110'
              >
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: easeInOut,
                    delay: delay * (index + 1),
                  }}
                  data-hover-text={link.name}
                  className='cursor-pointer'
                >
                  {link.name}
                </motion.h2>
              </div>
            )
          )}
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
