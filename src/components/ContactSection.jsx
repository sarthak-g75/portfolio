import ContactForm from './ContactForm'
import SubTitle from './SubTitle'
const ContactSection = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center lg:h-max 2xl:h-screen scroll-mt-10 '
    >
      <SubTitle title='Contact ' />
      <div className='flex flex-col lg:items-end justify-center py-10 h-full 2xl:gap-10 lg:gap-6 gap-4 md:w-[90%] w-[85%]'>
        <p className='text-lg lg:w-1/3 2xl:text-3xl lg:text-xl'>
          Have an idea that's out of this world? 🚀 Need a website that's
          smoother than your morning coffee? ☕ Drop me a message
        </p>
        <div className='lg:w-1/3'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
