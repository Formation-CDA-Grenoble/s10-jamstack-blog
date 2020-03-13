import React from 'react';
import { Article, Layout, CommentList, CommentForm } from '../components';
import DataContainer from '../containers/DataContainer';

const makeQuery = (slug) => `
query MyQuery {
  article(filter: {slug: {eq: "${slug}"}}) {
    createdAt
    id
    title
    content(markdown: true)
    slug
    cover {
      url
    }
  }
}
`;

const ArticlePage = ({ article }) =>
  <Layout>
    <Article article={article} />
    <CommentList />
    <CommentForm />
  </Layout>
;

export default ({ match }) => {
  const { slug } = match.params;
  return (
    <DataContainer
      query={makeQuery(slug)}
      component={ArticlePage}
    />
  );
}
