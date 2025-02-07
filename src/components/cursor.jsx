import { useEffect, useState } from 'react'
import { useSpring, motion } from 'motion/react'
const cursor = () => {
  const [hidden, setHidden] = useState(true)
  const [hoveredText, setHoveredText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const spring = {
    stiffness: 200,
    damping: 10,
    mass: 0.1,
  }
  const mousePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  useEffect(() => {
    const mouseMov = (e) => {
      setHidden(false)

      const size = isHovered ? 50 : 12 // Adjust offset dynamically based on state
      mousePos.x.set(e.clientX - size)
      mousePos.y.set(e.clientY - size)
    }

    window.addEventListener('mousemove', mouseMov)

    return () => {
      window.removeEventListener('mousemove', mouseMov)
    }
  }, [isHovered]) // Depend on `isHovered` so it updates dynamically

  useEffect(() => {
    const hoverTargets = document.querySelectorAll('[data-hover-text]')

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', (e) => {
        setHoveredText(e.target.getAttribute('data-hover-text'))
        setIsHovered(true)
      })

      target.addEventListener('mouseleave', () => {
        setHoveredText('')
        setIsHovered(false)
      })
    })

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', () => {})
        target.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])
  return (
    <motion.div
      className={`fixed top-0 left-0 z-[999] rounded-full pointer-events-none hidden lg:flex ${
        !isHovered && `mix-blend-difference`
      } flex items-center justify-center text-black font-medium  
      `}
      style={{
        x: mousePos.x,
        y: mousePos.y,
        width: isHovered ? 100 : 24,
        height: isHovered ? 100 : 24,
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'white',
        color: isHovered ? 'white' : 'black',
        // backgroundOpacity: isHovered ? '25%' : '100%',
        borderRadius: '50%',
        backdropFilter: isHovered ? 'blur(4px)' : 'none',
        WebkitBackdropFilter: isHovered ? 'blur(4px)' : 'none',
        transition:
          'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, backdrop-filter 0.2s ease',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
    >
      {isHovered && <span className='text-sm'>{hoveredText}</span>}
    </motion.div>
  )
}

export default cursor
