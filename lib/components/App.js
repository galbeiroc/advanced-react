import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './article/ArticleList';

import DataApi from '../dataApi';

class App extends Component {
  state = {
    articles: {},
    authors: {},
  }

  async componentDidMount() {
    const response = await axios.get('/data');
    const data = new DataApi(response.data);

    this.setState(() => ({
      articles: data.getArticles(),
      authors: data.getAuthors(),
    }))
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <ArticleList
        articles={articles}
        articleActions={this.articleActions}
      />
    )
  }
}

export default App;
