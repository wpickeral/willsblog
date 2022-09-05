import ArticlesList from '../../components/ArticlesList';
import articles from '../../data/articles';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';

const Index = () => {

  const pages = [
    {name: 'Articles', href: '/articles', current: true},
  ];

  return (
      <>
        <title>Will&apos;s Blog</title>
        <Layout>
          <Breadcrumbs pages={pages}/>
          <Heading>Articles</Heading>
          <ArticlesList posts={articles}/>
        </Layout>
      </>
  );
};

export default Index;



