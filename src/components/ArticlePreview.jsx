import React from 'react';
import { Card, Image, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticlePreview = ({ title, content, createdAt, cover, slug, category }) =>
  <Card>
    <Card.Header as="h3">
      {title} <Link to={`/category/${category.slug}`}>
        <Badge variant="secondary">{category.name}</Badge>
      </Link>
    </Card.Header>
    <Card.Body>
      <Image src={cover.url} fluid />
      {content}
      <div>
        <Link to={`/article/${slug}`}>
          <Button variant="primary">Read more...</Button>
        </Link>
      </div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        Published on {new Date(createdAt).toLocaleString('en-EN')}
      </small>
    </Card.Footer>
  </Card>
;

export default ArticlePreview;
