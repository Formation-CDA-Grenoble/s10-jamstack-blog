import React from 'react';
import { Article } from '../components';
import DataContainer from '../containers/DataContainer';

const makeQuery = (slug) => `
query MyQuery {
  article(filter: {slug: {eq: "${slug}"}}) {
    createdAt
    id
    title
    content
    slug
  }
}
`;

const ArticlePage = ({ article }) =>
  <Article article={article} />
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
