import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ArticlePage, HomePage, CategoryPage } from './pages';

const App = () =>
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/article/:slug' component={ArticlePage} />
        <Route exact path='/category/:slug' component={CategoryPage} />
      </Switch>
    </Container>
  </BrowserRouter>
;

export default App;
