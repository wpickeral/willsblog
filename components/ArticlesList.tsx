import React from 'react';
import Link from 'next/link';
import Heading from './Heading';
import PublishDate from './PublishDate';
import Image from 'next/image';

type ArticlesListProps = {
  slug: string,
  title: string,
  date: string,
  description: string,
  welcomeImageUrl: string,
  welcomeImageAltText: string,
}

const ArticlesList = ({posts}: { posts: Array<ArticlesListProps> }) => {

  return (
      <>
        {posts ?
            <ul>
              {posts.map((post: ArticlesListProps) => (
                  <li
                      className='grid gap-2.5 shadow-md dark:shadow-xl dark:shadow-[#0a0a0a] dark:bg-[#1a1a1a] rounded mb-9 p-6'
                      key={`post-${post.slug}`}
                  >
                    <div className='md:flex gap-8'>
                      <div className='md:mb-0 mb-6'>
                        <Image
                            className='inline-block h-52 w-52 rounded'
                            src={post.welcomeImageUrl}
                            width='300'
                            height='300'
                            alt={post.welcomeImageAltText}
                            objectFit='cover'
                        />
                      </div>
                      <div>
                        <Link href={`/articles/${post.slug}`}>
                          <a className='text-blue-500 text-2xl font-bold hover:underline'>{post.title}</a>
                        </Link>
                        <p className='text-gray-600 dark:text-gray-200 dark:text-gray-400 mt-5'>{post.description}</p>
                        <PublishDate date={post.date} className='mt-6'/>
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
            : <Heading>Nothing yet...</Heading>
        }
      </>
  );
};

export default ArticlesList;
