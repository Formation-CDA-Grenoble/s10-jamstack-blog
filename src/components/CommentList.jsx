import React, { Component } from 'react';
import Pusher from 'pusher-js';

const {
  REACT_APP_KEY,
  REACT_APP_CLUSTER,
} = process.env;

export default class CommentList extends Component {
  state = {
    comments: [],
  }

  componentDidMount = async () => {
    Pusher.logToConsole = true;

    const pusher = new Pusher(REACT_APP_KEY, {
      cluster: REACT_APP_CLUSTER,
      // forceTLS: true,
    });

    const channel = pusher.subscribe('blog');
    channel.bind('postComment', (data) => {
      const { comments } = this.state;
      this.setState({ comments: [...comments, data] })
    })
  }

  render = () => {
    const { comments } = this.state;

    return (
      <ul>
        {comments.map( (comment, index) =>
          <li key={index}>
            {comment.message}
          </li>
        )}
      </ul>
    )
  }
}
