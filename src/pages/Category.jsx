import React from 'react';
import { ArticleList } from '../components';
import DataContainer from '../containers/DataContainer';
import { withRouter } from 'react-router-dom';

const makeQuery = (slug) => `
query MyQuery {
  category(filter: {slug: {eq: ${slug}}}) {
    name
  }
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

const Category = ({ category, allArticles, match }) => {
  const { slug } = match.params;
  const filteredArticles = allArticles.filter(
    article => article.category.slug === slug
  );

  return (
    <div>
      <h1>Category: {category.name}</h1>
      <ArticleList articles={filteredArticles} />
    </div>
  );
}

export default ({ match }) => {
  const { slug } = match.params;
  return (
    <DataContainer
      query={makeQuery(slug)}
      component={withRouter(Category)}
    />
  );
}
