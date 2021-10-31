import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { answer: 42 }

  asyncFunct = () => {
    return Promise.resolve(32);
  }

  async componentDidMount() {
    this.setState({ answer: await this.asyncFunct() })
  }

  render() {
    return (
      <h2>Hello React components... {this.state.answer}</h2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
