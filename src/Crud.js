import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from 'react-bootstrap';

import { List } from './List'


export const Crud = () => {
  const [inputState, setInputState] = useState({
    task: ''
  })
  const [stateTask, setStateTask] = useState([])

  const { task } = inputState;


  const handleInputChange = ({ target }) => {
    setInputState({
      ...inputState,
      [target.name]: target.value,
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: task
    }

    setStateTask([...stateTask, newTask]);

  }

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add your new task</Form.Label>
            <Form.Control type="text" placeholder="Enter task" name="task" value={task} onChange={handleInputChange} />
            <Form.Text className="text-muted">
              You can add a new task.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Row>
      <Row>
        <List stateTask={stateTask} />
      </Row>
    </Container>
  );
}

