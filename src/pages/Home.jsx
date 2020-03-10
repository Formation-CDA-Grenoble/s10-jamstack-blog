import React from 'react';
import { Image } from 'react-bootstrap';
import ArticleList from '../components/ArticleList';
import DataContainer from '../containers/DataContainer';
import { Layout } from '../components';

const query = `
query MyQuery {
  homepage {
    title
    introduction(markdown: true)
    banner {
      url
    }
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

const Home = ({ homepage, allArticles }) =>
  <Layout>
    <h1>{homepage.title}</h1>
    <div dangerouslySetInnerHTML={ {__html: homepage.introduction} } />
    <Image src={homepage.banner.url} fluid />
    <ArticleList articles={allArticles} />
  </Layout>
;

export default () =>
  <DataContainer
    query={query}
    component={Home}
  />
;
