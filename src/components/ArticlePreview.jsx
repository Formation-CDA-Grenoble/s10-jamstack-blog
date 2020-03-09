import React from 'react';
import { Card, Image } from 'react-bootstrap';

const ArticlePreview = ({ title, content, createdAt, cover }) =>
  <Card>
    <Card.Header as="h3">
      {title}
    </Card.Header>
    <Card.Body>
      <Image src={cover.url} fluid />
      {content}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        Published on {new Date(createdAt).toLocaleString('en-EN')}
      </small>
    </Card.Footer>
  </Card>
;

export default ArticlePreview;
