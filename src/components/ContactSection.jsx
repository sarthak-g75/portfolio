import ContactForm from './ContactForm'
import ContactPara from './ContactPara'
import SubTitle from './SubTitle'
const ContactSection = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center lg:h-max 2xl:h-screen scroll-mt-10 '
    >
      <SubTitle title='Contact ' />

      <div className='flex flex-col lg:items-end justify-center py-10 h-full 2xl:gap-10 lg:gap-6 gap-4 md:w-[90%] w-[85%]'>
        <ContactPara />
        <div className='lg:w-1/3'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
