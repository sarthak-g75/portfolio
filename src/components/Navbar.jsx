import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
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
          {links.map((link, index) =>
            link.nav ? (
              <Link
                key={link.name}
                to={link.to}
                className='transition-all duration-300 hover:scale-110'
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
                className='transition-all duration-300 hover:scale-110'
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
              </div>
            )
          )}
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
