import React, { Component } from 'react';
import './App.css';
// import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Loading /> */}
      </div>
    );
  }
}

export default App;