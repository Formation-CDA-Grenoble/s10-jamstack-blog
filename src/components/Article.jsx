import React from 'react';
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
}`;

const Article = ({ article }) =>
  <article>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </article>
;

export default ({ match }) => {
  const { slug } = match.params;
  return (
    <DataContainer
      query={makeQuery(slug)}
      component={Article}
    />
  );
}
