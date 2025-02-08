import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useLocation } from 'react-router-dom'

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      multiplier: 2,
      lerp: 0.1,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      class: 'is-revealed',
    })

    // Handle route changes
    locomotiveScrollRef.current.update()
    locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true })

    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [location.pathname]) // Reinitialize on route change

  useEffect(() => {
    // Update scroll on content change
    const onPageLoad = () => {
      locomotiveScrollRef.current?.update()
    }

    // Handle dynamic content
    window.addEventListener('load', onPageLoad)
    return () => window.removeEventListener('load', onPageLoad)
  }, [])

  return (
    <main
      data-scroll-container
      ref={scrollRef}
      className='relative w-full min-h-screen'
    >
      {children}
    </main>
  )
}

export default SmoothScroll
