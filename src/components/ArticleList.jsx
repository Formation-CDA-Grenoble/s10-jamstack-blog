import React from 'react';
import ArticlePreview from './ArticlePreview';

const ArticleList = ({ articles }) =>
  <ul>
    {articles.map( (article, index) =>
      <li key={index}>
        <ArticlePreview {...article} />
      </li>
    )}
  </ul>
;

export default ArticleList;
