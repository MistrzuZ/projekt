import React, { Component } from 'react';
import './App.css';
// import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';
import InputForm from './Components/InputForm/InputForm';
import DisplayerImage from './Components/DisplayerImage/DisplayerImage';
import Clarifai from 'clarifai';
import 'tachyons';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
    apiKey: 'df7583b5e4b548d5a42a3ceb025315d6'
   });

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

  predictsAssign = (data) => {
    this.setState({ predict: data})
    console.log(this.state.predict);
  }

  buttonClick = () => {
    app.models
        .initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
        .then(generalModel => {
            return generalModel.predict("https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg", {language: 'pl'});
        })
        .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        this.predictsAssign(concepts);
      })
  }

  render() {
    return (
      <div className="App">
        <Particles params={params} className="particles"/>
        <Navigation />
        <InputForm buttonClick={this.buttonClick}/>
        <DisplayerImage />
        {/* <Loading /> */}
      </div>
    );
  }
}

export default App;