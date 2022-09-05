import Breadcrumbs from './Breadcrumbs';

const ArticleBreadcrumbs = ({articleTitle}: { articleTitle: string }) => {
  return (
      <Breadcrumbs pages={[
        {name: 'Articles', href: '/articles', current: false},
        {name: `${articleTitle}`, href: '/', current: false},
      ]
      }/>
  );
};

export default ArticleBreadcrumbs;