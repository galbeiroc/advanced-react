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

  render() {
    const { articles, authors } = this.state;
    console.log(articles);
    return (
      <ArticleList
        articles={articles}
        authors={authors}
      />
    )
  }
}

export default App;
