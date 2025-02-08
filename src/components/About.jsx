import SubTitle from './SubTitle'
import AboutInroSection from './AboutInroSection'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div
      className='flex flex-col items-center w-full min-h-screen scroll-mt-10'
      id='about'
    >
      <SubTitle title='About' />
      <div className='flex flex-col items-center justify-center w-full pb-10'>
        <div className='flex flex-col items-center w-full gap-10 px-4 2xl:gap-40 lg:px-14 2xl:justify-center lg:justify-between lg:gap-20 md:flex-row'>
          <AboutInroSection />
          <AboutImage />
        </div>
      </div>
    </div>
  )
}

export default About
