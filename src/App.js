import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { Crud } from './Crud'




function App(){


  return (
    <Container>
      <Row>
        <Crud />
      </Row>
    </Container>
  );
}

export default App;
