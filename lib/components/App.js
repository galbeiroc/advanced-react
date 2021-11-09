import React, { Component } from 'react';
import ProtoTypes from 'prop-types';

import ArticleList from './article/ArticleList';

class App extends Component {
  static childContextTypes = {
    store: ProtoTypes.object,
  }

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

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
