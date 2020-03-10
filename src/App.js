import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Article } from './components';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';

const App = () =>
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/article/:slug' component={Article} />
      </Switch>
    </Container>
  </BrowserRouter>
;

export default App;
