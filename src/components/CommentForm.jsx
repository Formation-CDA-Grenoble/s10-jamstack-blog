import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';

export default class CommentForm extends Component {
  state = {
    message: '',
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    const { message } = this.state;
    this.setState({ message: '' })
    event.preventDefault();
    Axios.post(
      '/.netlify/functions/comment',
      { message },
    );
  }

  render = () => {
    const { message } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormControl as="textarea" onChange={this.handleChange} value={message} />
        <Button variant="outline-primary" type="submit" disabled={message === ''}>Valider</Button>
      </Form>
    );
  }
}
