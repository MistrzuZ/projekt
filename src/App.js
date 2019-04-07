import React, { Component } from 'react';
import './App.css';
// import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';
import InputForm from './Components/InputForm/InputForm';
import 'tachyons';
import Particles from 'react-particles-js';

const params = {
  "particles": {
      "number": {
          "value": 60,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.05
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Particles params={params} className="particles"/>
        <Navigation />
        <InputForm />
        {/* <Loading /> */}
      </div>
    );
  }
}

export default App;