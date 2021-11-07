import React, { Component } from 'react';

import ArticleList from './article/ArticleList';

import DataApi from '../dataApi';
import { data } from '../testData.json';

const api = new DataApi(data);

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render() {
    const { articles, authors } = this.state;
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
