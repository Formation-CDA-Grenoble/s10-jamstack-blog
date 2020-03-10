import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '.';

const Layout = ({ children }) =>
  <Container>
    <Header />
    <main>
      {children}
    </main>
  </Container>
;

export default Layout;
