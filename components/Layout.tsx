import React, {useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import Footer from './Footer';
import PostHeader from './PostHeader';
import ArticleBreadcrumbs from './ArticleBreadcrumbs';
import Navbar from './Navbar';
import SEO from './SEO/SEO';
import {useRouter} from 'next/router';

type MetaProps = {
  author: string,
  title: string,
  date: string,
  welcomeImageUrl: string,
  welcomeImageAltText: string,
  description: string,
  codeSnippets: boolean,
}
const Layout = ({
  meta,
  children,
}: { meta?: MetaProps, children: React.ReactNode }) => {

  /*
    The function below will need to rend when ever the post component
    is rendered. This approach persists the syntax highlighting when
    dark mode is toggles or when the page is refreshed.
  */
  useEffect(() => {
    if (meta) {
      if (meta.codeSnippets) {
        Prism.highlightAll();
      }
    }
  });

  // Set the theme based on the user's preference on page load.
  useEffect(() => {
    let body = document.querySelector('body');
    const colorScheme = window.matchMedia(
        '(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (colorScheme === 'dark') {
      // @ts-ignore there will always be a body
      body.classList.add('class', 'dark');
    } else {
      // @ts-ignore there will always be a body
      body.classList.remove('class', 'dark');
    }
  }, []);

  // Handle if the users preferred color scheme changes while on the page
  useEffect(() => {
    let body = document.querySelector('body');
    window.matchMedia('(prefers-color-scheme: dark)').
        addEventListener('change' || 'load', function(e) {
          const colorScheme = e.matches ? 'dark' : 'light';
          if (colorScheme === 'dark') {
            // @ts-ignore there will always be a body
            body.classList.add('class', 'dark');
          } else {
            // @ts-ignore there will always be a body
            body.classList.remove('class', 'dark');
          }
        });
  }, []);

  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    if (isMounted && router.pathname.startsWith('/articles/')) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.async = true;
      script.setAttribute('data-repo', 'wpickeral/willsblog');
      script.setAttribute('data-repo-id', 'R_kgDOH8EpxQ');
      script.setAttribute('data-category', 'Announcements');
      script.setAttribute('data-category-id', 'DIC_kwDOHJ99fs4CRO2w');
      script.setAttribute('data-mapping', 'title');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'preferred_color_scheme');
      script.setAttribute('data-lang', 'en');
      script.setAttribute('crossOrigin', 'anonymous');
      head?.appendChild(script);
    }
    return () => {
      isMounted = false;
    };

  }, [router.pathname]);

  return (
      <>
        <SEO
            title={meta?.title
                ? `${meta.title} - Will's Blog`
                : 'willpickeral.dev'}
            author={meta?.author}
            description={meta?.description}
        />
        <Navbar/>
        <div
            id={`${meta ? 'mdx' : ''}`}
            className='min-h-full grid grid-cols-page-cols grid-rows-page-rows dark:bg-[#121212]'>
          <div className='p-6 col-start-2 col-span-1 md:p-2 mt-16'>
            {meta &&
              <>
                <ArticleBreadcrumbs articleTitle={meta.title}/>
                <PostHeader date={meta.date}
                            welcomeImageUrl={meta.welcomeImageUrl}
                            welcomeImageAltText={meta.welcomeImageAltText}
                            title={meta.title}/>
              </>
            }
            {children}
            <div className='giscus'></div>
          </div>
          <Footer/>
        </div>
      </>
  );

};

export default Layout;
