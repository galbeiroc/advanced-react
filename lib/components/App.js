import React, { Component } from 'react';

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
    return (
      <div>
        <h2>Render component</h2>
      </div>
    )
  }
}

export default App;
