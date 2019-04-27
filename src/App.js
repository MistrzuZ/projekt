import React, { Component } from 'react';
import './App.css';
import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';
import InputForm from './Components/InputForm/InputForm';
import GeneralImage from './Components/GeneralImage/GeneralImage';
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
        input: '',
        url: '',
        predict: '',
        loading: false,
        route: 'predictGeneral'
    }
  }

  inputUpdater = (e) => {
      this.setState({ input: e.target.value});
      console.log(this.state.input)
  }

  predictsAssign = (data) => {
    this.setState({ predict: data})
    console.log(this.state.predict);
  }

  changeRoute = (r) => {
    this.setState({route: r, input: '', url: '', predict: ''})
    console.log(this.state.route)
  }

    buttonClick = () => {
        this.setState({predict: ''})
        this.setState({loading: true})
        this.setState({url: this.state.input})
        if (this.state.route === 'predictFace') {
            app.models
                .predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
                .then(response => {
                    const concepts = response.outputs[0].data.regions;
                    this.predictsAssign(concepts);
                })
                .then(() => this.setState({loading: false}))
                .catch(err =>{
                    console.log(err)
                    this.setState({loading: false})})
        }
        if (this.state.route === 'predictGeneral') {
            app.models
                .initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
                .then(generalModel => {
                    return generalModel.predict(this.state.input, {language: 'en'});
                })
                .then(response => {
                    const concepts = response['outputs'][0]['data']['concepts'];
                    this.predictsAssign(concepts);
                })
                .then(() => this.setState({loading: false}))
                .catch((err) =>{
                    console.log(err)
                    this.setState({loading: false})
            })
        }
    }

  render() {
    return (
      <div className="App">
        <Particles params={params} className="particles"/>
        <Navigation changeRoute={this.changeRoute} />
        <InputForm buttonClick={this.buttonClick} inputUpdater={this.inputUpdater}/>
        {(this.state.predict)
        ? <GeneralImage predict={this.state.predict} url={this.state.url} route={this.state.route} /> : ''
        }
        {(this.state.loading)
        ? <Loading /> : ''
        }
      </div>
    );
  }
}

export default App;