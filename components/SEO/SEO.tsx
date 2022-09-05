import Head from 'next/head';

const SEO = ({
  description,
  author,
  title,
}: { description?: string, author?: string, title?: string }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name='title' content={title}/>
        <meta name='author' content={author}/>
        <meta name='description' content={description}/>
      </Head>
  );
};
export default SEO;