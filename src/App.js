import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArticleList } from './components';
import { Container } from 'react-bootstrap';

const App = () =>
  <Container>
    <ArticleList />
  </Container>
;

export default App;
