import type {NextPage} from 'next';
import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from '../data/articles';
import Layout from '../components/Layout';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
      <Layout>
        <div
            className='sm:mt-14 flex flex-col text-gray-600 border-b-[2px] border-b-black/[.06] dark:border-b-white/[.03] pb-10 dark:text-gray-100 mb-10'>

          <div className='flex items-center mt-12 mb-3'>
            <Image src='/will-avatar.jpeg'
                   height={150}
                   width={150}

                   className='rounded-full w-full h-full'
                   alt='A grayscale headshot image of Will Pickeral smiling.'/>

            <h1 className='text-5xl md:text-6xl font-extrabold dark:text-gray-300 ml-6'>Hi!<br/>I&lsquo;m <span
                className='dark:text-gray-100'>Will</span>.
            </h1>
          </div>
          <h2 className='text-lg font-normal pt-5 text-gray-500 dark:text-gray-400'>
            I&lsquo;m a developer from Columbus, Ohio. I have a passion for
            programming and love building
            apps with React.
          </h2>
          <h2 className='text-lg font-normal pt-5 text-gray-500 dark:text-gray-400'>
            Welcome to my blog, where I write about everything
            related to React and
            Typescript.
          </h2>
        </div>
        <h3 className='text-gray-500 dark:text-gray-500 pb-1'>Latest posts</h3>
        <ArticlesList posts={articles}/>
      </Layout>
  );
};

export default Home;

