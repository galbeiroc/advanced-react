import React, { Component } from 'react';

import ArticleList from './article/ArticleList';

class App extends Component {
  state =  this.props.store.getState();

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <ArticleList
        articles={articles}
        store={this.props.store}
      />
    )
  }
}

export default App;
