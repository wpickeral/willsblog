/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Link from 'next/link';
import {Disclosure} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';

const pages = [
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'GitHub',
    path: 'https://github.com/wpickeral',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export default function Navbar() {

  return (
      <Disclosure as='nav'
                  className='bg-white dark:bg-[#121212] dark:bg-[#232323] shadow fixed w-full z-10'>
        {({open}) => (
            <>
              <div className='max-w-5xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex justify-between h-16'>
                  <div
                      className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button
                        className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                          <XIcon className='block h-6 w-6' aria-hidden='true'/>
                      ) : (
                          <MenuIcon
                              className='block h-6 w-6'
                              aria-hidden='true'/>
                      )}
                    </Disclosure.Button>
                  </div>
                  <div
                      className='flex items-center px-2 sm:items-stretch sm:justify-start w-full px-16'>
                    <div
                        className='flex-shrink-0 flex sm:justify-start justify-center sm:justify-start items-center w-full sm:w-auto'>
                      <Link href='/' passHref>
                        <a className='py-2 hover:underline text-gray-600 hover:text-gray-500 inline-flex items-center dark:hover:text-gray-100 dark:text-gray-400'>
                          Will&apos;s Blog
                        </a>
                      </Link>
                    </div>
                    <div
                        className='hidden sm:ml-auto sm:flex items-center sm:space-x-8'>
                      {pages.map((page) => {
                        return (
                            <Link key={page.name} href={page.path} passHref>
                              <a className='py-2 hover:underline text-gray-600 hover:text-gray-500 inline-flex items-center dark:hover:text-gray-100 dark:text-gray-400'>
                                {page.name}
                              </a>
                            </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className='sm:hidden'>
                <div
                    className='pt-2 pb-4 space-y-1 flex flex-col m-3 p-4 items-center'>
                  {pages.map((page) => {
                    return (
                        <Link key={page.name} href={page.path} passHref>
                          <a className='py-2 hover:underline text-gray-600 hover:text-gray-500 inline-flex items-center dark:hover:text-gray-100 dark:text-gray-400'>
                            {page.name}
                          </a>
                        </Link>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
  );
}
