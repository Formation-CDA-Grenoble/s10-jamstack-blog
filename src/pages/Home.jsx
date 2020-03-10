import React, { Component } from 'react';
import Axios from 'axios';
import { Image } from 'react-bootstrap';
import ArticleList from '../components/ArticleList';

const query = `
query MyQuery {
  homepage {
    title
    introduction(markdown: true)
    banner {
      url
    }
  }
}
`;

export default class Home extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    Axios.post(
      // GraphQL endpoint
      'https://graphql.datocms.com/',
      // Requête GraphQL
      { query },
      // Options pour authentifier notre requête
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
        } 
      },
    )
    .then(response => {
      if (response.data.hasOwnProperty('errors')) {
        for (let error of response.data.errors) {
          console.error('Error while querying GraphQL API:', error.message);
        }
      } else {
        const { data } = response.data;
        this.setState({ data });
      }
    })
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <div>Loading...</div>;
    }

    const { homepage } = data;

    return (
      <div>
        <h1>{homepage.title}</h1>
        <div dangerouslySetInnerHTML={ {__html: homepage.introduction} } />
        <Image src={homepage.banner.url} fluid />
        <ArticleList />
      </div>
    );
  }
}
