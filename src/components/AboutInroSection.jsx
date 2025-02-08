import { motion } from 'motion/react'
import { techStack } from '../assets/aboutData'
import TechStack from './TechStack'
const AboutInroSection = () => {
  return (
    <motion.section
      className='max-w-3xl p-6 space-y-4 text-left'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className='text-3xl font-bold '>Hey, I'm Sarthak! 👋</h2>
      <p className='text-lg '>
        From <span className='font-semibold'>winning hackathons</span> to{' '}
        <span className='italic'>debugging in my dreams</span>, I build slick,
        scalable web apps with{' '}
        <span className=''>Next.js, React, Node, and Prisma</span>
        —all while making sure they look{' '}
        <span className='font-bold'>damn good</span> with Tailwind & Framer
        Motion.
      </p>
      <p className='text-lg '>
        Co-founded an <span className='font-semibold '>agency</span>, Iand now
        crafting eCommerce platforms, voting systems, and whatever breaks the
        internet next. If it's got cool animations, blazing speed, and a dark
        theme, I’m in.
      </p>
      <p className='text-lg'>
        <div className='p-4 rounded-lg bg-primary text-accent'>
          <span className='font-bold '>Tech stack?</span>
          <div className='grid grid-cols-4 gap-6 my-4 rounded-lg lg:grid-cols-5 bg-primary text-accent '>
            {techStack.map((tech, index) => {
              return (
                <TechStack
                  key={index}
                  tech={tech}
                />
              )
            })}
          </div>
          if it’s <span className='font-bold'>scalable and fun</span>, I’m
          building with it.
        </div>
      </p>
      <div>
        <a
          className='text-lg font-semibold cursor-pointer hover:text-orange-400'
          href='mailto:gsarthak09@gmail.com'
        >
          Hit me up if you want{' '}
          <span className='underline'>clean code, dope UIs</span>, and just the
          right amount of chaos. 🔥
        </a>
      </div>
    </motion.section>
  )
}

export default AboutInroSection
