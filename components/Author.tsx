import Link from 'next/link';
import {TwitterIcon} from './Icons';

const Author = ({className}: { className?: string }) => {
  return (
      <div className={className}>
        <Link href='https://twitter.com/williampickeral'>
          <a className='pb-1 text-gray-600 hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-300 flex items-center'>
            <TwitterIcon/>
            <span className='ml-2'>@willpickeral</span>
          </a>
        </Link>
      </div>
  );
};

export default Author;