import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const fields = [
  {
    cols: 2,
    content: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'ex. John Doe',
        required: true,
      },
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'xyz@best.com',
        required: true,
      },
    ],
  },
  {
    cols: 1,
    content: [
      {
        label: 'Subject',
        name: 'subject',
        type: 'text',
        placeholder: 'Enter your subject',
        required: true,
      },
    ],
  },
  {
    cols: 1,
    content: [
      {
        label: 'Message',
        name: 'message',
        type: 'textarea',
        placeholder: 'Enter your message',
        required: true,
      },
    ],
  },
  {
    cols: 1,
    content: [
      {
        label: 'Budget',
        name: 'budget',
        type: 'text',
        placeholder: '$500 - $5000',
        required: true,
      },
    ],
  },
]

const ContactForm = () => {
  const formRef = useRef(null)
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    subject: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus({ success: true, message: 'Message sent successfully!' })
          console.log('success')
          setValues({
            name: '',
            email: '',
            message: '',
            budget: '',
            subject: '',
          })
        },
        (error) => {
          setStatus({
            success: false,
            message: 'Failed to send message. Try again!',
          })
          console.error('FAILED...', error.text)
        }
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className='w-full p-6 font-bold rounded-lg shadow-lg bg-accent dark:bg-darkAccent bg-opacity-80 text-primary dark:text-darkPrimary'
    >
      <form
        ref={formRef}
        className='space-y-4'
        onSubmit={handleSubmit}
      >
        {fields.map((field, index) => (
          <div
            key={index}
            className={field.cols === 2 ? 'grid grid-cols-2 gap-4' : ''}
          >
            {field.content.map((elem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + idx) * 0.1 }}
              >
                <label className='block text-sm font-bold'>{elem.label}</label>
                {elem.type === 'textarea' ? (
                  <textarea
                    name={elem.name}
                    value={values[elem.name]}
                    onChange={handleChange}
                    className='w-full p-2 mt-1 border rounded focus:ring focus:ring-primary text-accent'
                    placeholder={elem.placeholder}
                    required={elem.required}
                  />
                ) : (
                  <input
                    name={elem.name}
                    value={values[elem.name]}
                    onChange={handleChange}
                    type={elem.type}
                    className='w-full p-2 mt-1 border rounded focus:ring focus:ring-primary text-accent'
                    placeholder={elem.placeholder}
                    required={elem.required}
                  />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-full p-2 mt-4 rounded-lg shadow-md bg-primary dark:bg-darkPrimary text-accent dark:text-darkAccent'
          type='submit'
        >
          Submit
        </motion.button>
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-2 text-center text-sm ${
              status.success
                ? 'dark:text-green-800 text-green-400 '
                : 'text-red-500'
            }`}
          >
            {status.message}
          </motion.p>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
