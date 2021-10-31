import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { answer: 42 }

  render() {
    return (
      <h2>Hello React components.. {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
