import {FormEvent} from 'react';
import useContactForm from '../../hooks/useContactForm';

const DemoContactForm = () => {

  const {values, handleChange} = useContactForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
      <div
          className='grid-cols-[40%_60%] grid p-6 rounded mb-8 mt-8 border-solid border-gray-200 dark:border-white/10 border-[1px] items-stretch'>
        <form onSubmit={handleSubmit}
              className='grid grid-cols-1 gap-3 pr-8'>
          <div className='flex flex-col'>
            <label className='text-gray-600 dark:text-gray-300 pb-1'>
              Email
            </label>
            <input
                className='border-gray-200 dark:border-white/10 border-[1px] text-gray-800 dark:text-gray-200 p-2 rounded dark:bg-[#121212]'
                required
                id='email'
                value={values.email}
                onChange={handleChange}
                type='email'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-gray-600 dark:text-gray-300 pb-1'>
              Subject
            </label>
            <input
                className='border-gray-200 dark:border-white/10 border-[1px] text-gray-800 dark:text-gray-200 p-2 rounded dark:bg-[#121212]'
                id='subject'
                value={values.subject}
                onChange={handleChange}
                type='text'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-gray-600 dark:text-gray-300 pb-1'>
              Message
            </label>
            <textarea
                className='border-gray-200 dark:border-white/10 border-[1px] text-gray-800 dark:text-gray-200 p-2 rounded dark:bg-[#121212]'
                value={values.message}
                onChange={handleChange}
                id='message'
                rows={4}
            />
          </div>
        </form>
        <div>
          <span className='text-gray-600 dark:text-gray-300'>Console</span>
          <pre className='p-2 language-jsx'>
          <code className='text-gray-800 dark:text-gray-200 language-jsx'>
  {
    `
{${values.email ? `\n\t\email: "${values.email}",` : ''}${values.subject
        ? `\n\t\subject: "${values.subject}",`
        : ''}${values.message ? `\n\t\message: "${values.message}",` : ''}
}
  `
  }
          </code>
        </pre>
        </div>
      </div>
  );
};

export default DemoContactForm;