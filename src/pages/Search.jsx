import React from 'react'
import DataContainer from '../containers/DataContainer';
import { withRouter } from 'react-router-dom';
import { ArticleList } from '../components';

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
      slug
      name
    }
  }
}
`;

const Search = ({ match, allArticles }) => {
  const { argument } = match.params;
  const filteredArticles = allArticles.filter(
    article =>
      article.content.toLowerCase().includes(argument) ||
      article.title.toLowerCase().includes(argument)
  );

  return (
    <div>
      <h1>Search</h1>
      <p>Articles matching search argument: {argument}</p>
      <ArticleList articles={filteredArticles} />
    </div>
  );
}

export default () =>
  <DataContainer
    query={query}
    component={withRouter(Search)}
  />
;
