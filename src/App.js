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

  boxUpdate = (response) => {
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);
    const arrayResponse = response.outputs[0].data.regions
    const boxes = arrayResponse.map(region => region.region_info.bounding_box);
    const predict = boxes.map(box => {
      const { bottom_row, left_col, right_col, top_row } = box;
      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - (right_col * width),
        bottomRow: height - (bottom_row * height)
      }
    })
    this.setState({predict})
    .then(this.setState({loading: false}))
  }

  inputUpdater = (e) => {
      this.setState({ url: e.target.value});
  }

  predictsAssign = (data) => {
    this.setState({ predict: data})
  }

  changeRoute = (r) => {
    this.setState({route: r, input: '', predict: ''})
  }

    buttonClick = () => {
        this.setState({predict: ''})
        this.setState({loading: true})
        this.setState({input: this.state.url})
        if (this.state.route === 'predictFace') {
            app.models
                .predict(Clarifai.FACE_DETECT_MODEL, this.state.url)
                .then(this.setState({predict: true}))
                .then(response => {
                    this.boxUpdate(response);
                })
                .catch(err =>{
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
        ? <GeneralImage predict={this.state.predict} input={this.state.input} route={this.state.route} loading={this.state.loading} />
        : ''
        }
        {(this.state.loading)
        ? <Loading /> : ''
        }
      </div>
    );
  }
}

export default App;