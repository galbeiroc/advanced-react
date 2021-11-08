import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './article/ArticleList';

import DataApi from '../dataApi';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

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
