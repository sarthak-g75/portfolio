'use client'
import Image from 'next/image'
import About from '@/components/About.jsx'
import ContactSection from '@/components/ContactSection.jsx'
import Hero from '@/components/Hero.jsx'
import Projects from '@/components/Projects.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <ContactSection />
    </>
  )
}
