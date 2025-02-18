import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

const socialsLinks = [
  {
    name: 'Github',
    to: 'https://github.com/sarthak-g75',
    icon: <Github />,
    color: 'hover:text-gray-900',
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/sarthak78/',
    icon: <Linkedin />,
    color: 'hover:text-blue-700',
  },
  {
    name: 'Instagram',
    to: 'https://www.instagram.com/sarthak_g75/',
    icon: <Instagram />,
    color: 'hover:text-pink-500',
  },
  {
    name: 'X / Twitter',
    to: 'http://x.com/sarthak_g75',
    icon: <Twitter />,
    color: 'hover:text-black',
  },
]

const Socials = () => {
  return (
    <div className='flex flex-col gap-4'>
      {socialsLinks.map((link) => (
        <a
          key={link.name}
          href={link.to}
          target='_blank'
          rel='noreferrer'
          className={`flex items-center gap-4 text-xl transition-all duration-300 font-bold hover:scale-110 p-2 rounded-lg hover:bg-primary ${link.color}`}
        >
          <h3>{link.icon}</h3> <h3>{link.name}</h3>
        </a>
      ))}
    </div>
  )
}

export default Socials
