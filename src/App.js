import React, { Component } from 'react';
import './App.css';
import Loading from './Components/Loading/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }
}

export default App;
