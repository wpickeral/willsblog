const Footer = () => {
  return (
      <footer
          className=' border-t-gray-200 dark:border-t-white/10 border-t-[1px] text-gray-600 dark:text-white/90 dark:bg-[#121212] p-5 col-start-2 col-span-1 text-center w-full'>
        <ul>
          <li>
            <a
                className='underline font-normal text-sm text-gray-400 hover:text-white'
                href='https://www.freeprivacypolicy.com/live/d054a988-fa34-4627-b7a4-a0c86fcea748'
            >Privacy Policy</a>
          </li>
          <li className='font-normal text-sm mt-2'>Copyright &copy; {new Date().getFullYear()} -
            Will Pickeral
          </li>
        </ul>
      </footer>
  );
};
export default Footer;
