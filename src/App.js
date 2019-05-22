import React, { Component } from 'react';
import './App.css';
import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';
import InputForm from './Components/InputForm/InputForm';
import GeneralImage from './Components/GeneralImage/GeneralImage';
import FaceImage from './Components/FaceImage/FaceImage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users'
import 'tachyons';
import Particles from 'react-particles-js';
import params from './Components/params';

const initialState = {
  input: '',
  url: '',
  generalPredict: '',
  facePredict: '',
  loading: false,
  isLogin: false,
  route: 'home',
  user: {}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // Poniższa funkcja służy do wymierzania nowych wielkości boxow względem wielkości obrazka dla komponentu FaceImage
  boxUpdate = (response) => {
    const image = document.getElementById('faceImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const arrayResponse = response.outputs[0].data.regions
    const boxes = arrayResponse.map(region => region.region_info.bounding_box);
    const facePredict = boxes.map(box => {
      const { bottom_row, left_col, right_col, top_row } = box;
      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - (right_col * width),
        bottomRow: height - (bottom_row * height)
      }
    })
    this.setState({facePredict, loading:false})
  }

  // Poniższe proste funkcje służa jedynie do nadania nowych wartości zmiennym
  inputUpdater = (v) => {
      this.setState({ url: v.target.value});
  }

  predictsAssign = (v) => {
    const generalPredict = v['outputs'][0]['data']['concepts'];
    this.setState({generalPredict})
  }

  changeRoute = (v) => {
    this.setState({route: v, generalPredict: '', facePredict: ''})
  }

  loadUser = (v) => {
    this.setState({ user: v })
  }

  changeLogin = (v) => {
    this.setState({isLogin: v})
    if (!v) {
      this.setState(initialState)
    }
  }

  changeLoading = (v) => {
    this.setState({loading: v})
  }

  updateUses = () => {
    fetch('http://localhost:3000/uzycia', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ id: this.state.user.id })
    })
    .then(response => response.json())
    .then(uses => {
      const user = Object.assign(this.state.user, { uses })
      this.setState({ user })
    })
  }

  // Na każde klikniecię przycisku z komponentu InputForm wykona się ta funckcja która wyśle zapytanie do servera api a odpowiedź przekaże dalej
  buttonClick = () => {
      this.setState({generalPredict: '', facePredict: '', input: this.state.url, loading: true})
      if (this.state.route === 'predictFace') {
          fetch('http://localhost:3000/zdjecieTwarz', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              input: this.state.url
            })
          })
          .then(this.setState({facePredict: true}))
          .then(response => response.json())
          .then(response => this.boxUpdate(response))
          .then(() => this.updateUses())
          .catch(err =>{
            this.setState({loading: false, facePredict: 'bad link'})
          })
      }
      if (this.state.route === 'predictGeneral') {
        fetch('http://localhost:3000/zdjecieGeneral', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            input: this.state.url
          })
        })
        .then(response => response.json())
        .then(response => this.predictsAssign(response))
        .then(() => this.setState({ loading: false }))
        .then(() => this.updateUses())
        .catch(err =>{
          this.setState({loading: false, generalPredict: 'bad link'})
        })
      }
    }

  render() {
    return (
      // Generowanie każdego komponentu na żywo
      <main className="App">
        <Particles params={params} className="particles"/>
        <Navigation changeRoute={this.changeRoute} route={this.state.route} isLogin={this.state.isLogin} changeLogin={this.changeLogin} user={this.state.user} />
        {(this.state.route === 'login')
          ? <Login changeLogin={this.changeLogin} changeRoute={this.changeRoute} changeLoading={this.changeLoading} loadUser={this.loadUser} />
          : (this.state.route === 'register')
          ? <Register changeLogin={this.changeLogin} changeRoute={this.changeRoute} changeLoading={this.changeLoading} loadUser={this.loadUser} />
          : (this.state.route === 'home')
          ? <Home changeRoute={this.changeRoute} changeLogin={this.changeLogin} isLogin={this.state.isLogin}/>
          : (this.state.route === 'users')
          ? <Users />
          : <section className="flex flex-wrap flex-row pa3">
            <InputForm buttonClick={this.buttonClick} inputUpdater={this.inputUpdater}/>
            {(this.state.generalPredict) ? <GeneralImage predict={this.state.generalPredict} input={this.state.input} route={this.state.route} loading={this.state.loading} /> : '' }
            {(this.state.facePredict) ? <FaceImage predict={this.state.facePredict} input={this.state.input} route={this.state.route} loading={this.state.loading} /> : '' }
            </section>
        }
        {(this.state.loading) ? <Loading /> : '' }
      </main>
    );
  }
}

export default App;