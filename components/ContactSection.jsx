import ContactForm from './ContactForm'
import ContactPara from './ContactPara'
import ExperienceSection from './ExperienceSection'
import SubTitle from './SubTitle'
import { motion } from 'motion/react'
const ContactSection = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center lg:h-max 2xl:h-screen scroll-mt-10 '
    >
      <SubTitle title='Contact ' />
      <div className='flex justify-center items-center h-full'>
        <div className='flex justify-between lg:flex-row flex-col w-full lg:px-24 px-10 gap-10 py-10 '>
          <div className='lg:w-1/2'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
              className='flex flex-col gap-4 '
            >
              <h2 className={`text-2xl font-semibold 2xl:text-3xl`}>
                Professional Experience
              </h2>
              <ExperienceSection />
              {/* <div className='w-full h-[2px] bg-accent dark:bg-darkAccent'></div> */}
            </motion.div>
          </div>
          <div className='flex flex-col gap-4 lg:w-1/3 w-full '>
            <ContactPara />
            <div className=''>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
