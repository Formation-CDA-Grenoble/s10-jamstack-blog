import React from 'react';
import ArticlePreview from './ArticlePreview';
import DataContainer from '../containers/DataContainer';

const query = `
query MyQuery {
  allArticles {
    id
    title
    content
    createdAt
    slug
    cover {
      url
    }
    category {
      id
      name
    }
  }
}`;

const ArticleList = ({ allArticles }) =>
  <ul>
    {allArticles.map( (article, index) =>
      <li key={index}>
        <ArticlePreview {...article} />
      </li>
    )}
  </ul>
;

export default () =>
  <DataContainer
    query={query}
    component={ArticleList}
  />
;
