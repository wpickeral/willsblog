import {ChevronRightIcon, HomeIcon} from '@heroicons/react/solid';
import Link from 'next/link';

function Breadcrumbs({
  wrapperClass,
  pages,
}: { wrapperClass?: string, pages: { name: string, href: string, current: boolean }[] }) {
  return (
      <div className={`pb-7 pt-3 sm:pt-10  ${wrapperClass}`}>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol role='list' className='flex items-center space-x-4'>
            <li>
              <div>
                <Link href='/'>
                  <a className='text-gray-600 hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-400'>
                    <HomeIcon className='flex-shrink-0 h-5 w-5'
                              aria-hidden='true'/>
                    <span className='sr-only'>Home</span>
                  </a>
                </Link>
              </div>
            </li>
            {pages.map((page) => (
                <li key={page.name}>
                  <div className='flex items-center'>
                    <ChevronRightIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-600 dark:text-gray-400'
                        aria-hidden='true'
                    />
                    <Link href={page.href}>
                      <a
                          className='ml-4 text-sm text-gray-600 hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-400'
                          aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </Link>
                  </div>
                </li>
            ))}
          </ol>
        </nav>
      </div>
  );
}

export default Breadcrumbs;