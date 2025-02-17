import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { easeInOut, motion } from 'motion/react'
const name = 'Sarthak Gupta'
const links = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]
const delay = 0.5

const Links = ({ links, handleScrollLinkClick }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4 lg:flex-row lg:gap-8 '>
      {links.map((link, index) =>
        link.nav ? (
          <Link
            key={index}
            to={link.to}
            className='transition-all duration-300 hover:scale-110'
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: easeInOut,
                delay: delay * index,
              }}
              className='cursor-pointer'
            >
              {link.name}
            </motion.h2>
          </Link>
        ) : (
          <div
            key={index}
            onClick={() => handleScrollLinkClick(link.to)}
            className='transition-all duration-300 hover:scale-110'
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: easeInOut,
                delay: delay * index,
              }}
              className='cursor-pointer'
            >
              {link.name}
            </motion.h2>
          </div>
        )
      )}
    </div>
  )
}

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

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
  // console.log(openMenu)
  return (
    <nav className='relative h-[8vh] flex items-center lg:px-10 px-4'>
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
            className='text-xl font-semibold cursor-pointer 2xl:text-3xl text-nowrap lg:text-2xl'
          >
            {name}
          </motion.h2>
        </Link>
        <div className='flex items-center gap-4 text-lg font-bold lg:gap-8'>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='p-2 transition-all duration-300 rounded-full bg-accent dark:bg-darkAccent text-primary dark:text-darkPrimary hover:scale-110'
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <div className='relative cursor-pointer lg:hidden'>
            {/* Menu Icon */}
            <div onClick={() => setOpenMenu((prev) => !prev)}>
              {openMenu ? <X size={24} /> : <Menu size={24} />}
            </div>

            {/* Dropdown Menu */}
            {openMenu && (
              <motion.div
                initial={{ opacity: 0, x: 20 }} // Start slightly offscreen
                animate={{ opacity: 1, x: 0 }} // Slide into place
                exit={{ opacity: 0, x: 20 }} // Slide out on close
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='absolute top-0 right-8 flex flex-col items-center justify-center gap-4 p-4 w-[50vw] h-max bg-accent dark:bg-darkAccent  z-20 text-primary dark:text-darkPrimary rounded-xl shadow-lg'
              >
                <Links
                  links={links}
                  handleScrollLinkClick={handleScrollLinkClick}
                />
              </motion.div>
            )}
          </div>

          <div className='items-center hidden gap-4 lg:flex lg:gap-8 '>
            <Links
              links={links}
              handleScrollLinkClick={handleScrollLinkClick}
            />
          </div>
        </div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='absolute bottom-0 w-full h-[2px] left-0 bg-accent dark:bg-darkAccent'
        />
      </div>
    </nav>
  )
}

export default Navbar
