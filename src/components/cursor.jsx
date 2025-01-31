import { useEffect, useState } from 'react'
import { useSpring, motion } from 'motion/react'
const cursor = () => {
  const [hidden, setHidden] = useState(true)
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
      //   console.log(e)
      setHidden(false)
      //   console.log(e.clientX, e.clientY)
      mousePos.x.set(e.clientX - 12)
      mousePos.y.set(e.clientY - 12)
    }
    console.log(mousePos)
    console.log(mousePos.x)

    window.addEventListener('mousemove', mouseMov)

    return () => {
      window.removeEventListener('mousemove', mouseMov)
    }
  }, [])
  return (
    <motion.span
      transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      className={`fixed hidden md:inline top-0 left-0 z-[999] rounded-full pointer-events-none transition-[height,width,border,background] duration-200 cursor-pointer w-6 h-6  mix-blend-difference bg-white`}
      style={{
        x: mousePos.x,
        y: mousePos.y,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
    />
  )
}

export default cursor
