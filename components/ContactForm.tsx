import useContactForm from '../hooks/useContactForm';
import sendEmail from '../lib/sendEmail';
import {useRouter} from 'next/router';
import {FormEvent, useEffect, useState} from 'react';
import Heading from './Heading';
import Breadcrumbs from './Breadcrumbs';

const ContactForm = () => {

  const {values, handleChange} = useContactForm();
  const router = useRouter();

  const [responseMessage, setResponseMessage] = useState(
      {isSuccessful: false, message: ''});

  useEffect(() => {

    async function handleMessage() {
      if (responseMessage.isSuccessful) {
        await router.push('/articles');
      }
    }

    handleMessage();

  }, [responseMessage.isSuccessful]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage(
            {isSuccessful: true, message: 'Thank you for your message.'});
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops something went wrong. Please try again.',
      });
    }
  };
  const pages = [
    {name: 'Contact', href: '/contact', current: true},
  ];

  return (
      <form onSubmit={handleSubmit}
            className='grid grid-cols-1 gap-10'>
        <div className='flex flex-col'>
          <Breadcrumbs pages={pages}/>
          <Heading>Contact Me</Heading>
          <label className='text-gray-600 dark:text-gray-300 pb-2'>
            Email
          </label>
          <input
              required
              className='text-gray-800 dark:text-gray-200 p-3 rounded dark:bg-[#121212] border-solid border-gray-200 dark:border-white/10 border-[1px]'
              id='email'
              value={values.email}
              onChange={handleChange}
              type='email'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-gray-600 dark:text-gray-300 pb-2'>
            Subject
          </label>
          <input
              required
              className='text-gray-800 dark:text-gray-200 p-3 rounded dark:bg-[#121212] border-solid border-gray-200 dark:border-white/10 border-[1px]'
              id='subject'
              value={values.subject}
              onChange={handleChange}
              type='text'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-gray-600 dark:text-gray-300 pb-2'>
            Message
          </label>
          <textarea
              required
              className='text-gray-800 dark:text-gray-200 p-3 rounded dark:bg-[#121212] border-solid border-gray-200 dark:border-white/10 border-[1px]'
              value={values.message}
              onChange={handleChange}
              id='message'
              rows={8}
          />
        </div>
        <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 pt-3 pb-3 text-l rounded text-white transition-all'
            value='Submit'
        >
          Send
        </button>
      </form>
  );
};

export default ContactForm;