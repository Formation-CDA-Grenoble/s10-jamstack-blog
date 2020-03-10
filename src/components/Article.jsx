import React from 'react';

const Article = ({ article }) =>
  <article>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </article>
;

export default Article;
