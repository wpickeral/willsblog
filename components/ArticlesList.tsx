import React from 'react';
import Link from 'next/link';
import Heading from './Heading';
import PublishDate from './PublishDate';

type ArticlesListProps = {
  slug: string,
  title: string,
  date: string,
  description: string,
}

const ArticlesList = ({posts}: { posts: Array<ArticlesListProps> }) => {

  return (
      <>
        {posts ?
            <ul>
              {posts.map((post: ArticlesListProps) => (
                  <li
                      className='grid gap-2.5 shadow-md dark:shadow-[#0a0a0a] dark:bg-[#1a1a1a] rounded mb-9 p-6'
                      key={`post-${post.slug}`}
                  >
                    <Link href={`/articles/${post.slug}`}
                    >
                      <a className='text-blue-500 text-2xl font-bold hover:underline'>{post.title}</a>
                    </Link>
                    <p className='text-gray-600 dark:text-gray-200 dark:text-gray-400'>{post.description}</p>
                    <PublishDate date={post.date}/>
                  </li>
              ))}
            </ul>
            : <Heading>Nothing yet...</Heading>
        }
      </>
  );
};

export default ArticlesList;
