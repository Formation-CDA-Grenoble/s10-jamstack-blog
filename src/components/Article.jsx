import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Article = ({ article }) =>
  <article>
    <Jumbotron>
      <h1>{article.title}</h1>
      <small>Published on {new Date(article.createdAt).toLocaleString('en-EN')}</small>
    </Jumbotron>
    <div dangerouslySetInnerHTML={{ __html: article.content }} />
    <Link to="/">
      <Button variant="secondary">Back to Home</Button>
    </Link>
  </article>
;

export default Article;
