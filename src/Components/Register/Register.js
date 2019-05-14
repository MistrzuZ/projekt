import React from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            error: false
        }
        this.validator = new SimpleReactValidator();
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value} )
    }

    clickRegister = () => {
        if (this.validator.allValid()) {
            fetch('http://localhost:3000/rejestracja', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.changeLogin(true)
                    this.props.changeRoute('predictGeneral')
                } else {
                    this.setState({ error: true })
                }
            })
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render () {
        return (
            <div className="center">
                <form className="measure moj-kolor pa4 ma4 br4 shadow-5">
                    <p className="f3 fw6 ph0 mh0">Rejestracja</p>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            onChange={this.handleChange('email')}
                        />
                        {this.validator.message('email', this.state.email, 'required|email')}
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Nazwa</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            onChange={this.handleChange('name')}
                        />
                        {this.validator.message('name', this.state.name, 'required|alpha_space|min:5|max:30')}
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Hasło</label>
                        <input
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            onChange={this.handleChange('password')}
                        />
                        {this.validator.message('password', this.state.password, 'required|alpha_num_dash|min:5')}
                    </div>
                    <div>
                        <input
                            className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib white"
                            type="button"
                            value="Zaloguj"
                            onClick={this.clickRegister}
                        />
                        {(this.state.error) ? <label className="srv-validation-message db">Wybrany email jest już zajęty</label> : ''}
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim db pointer" onClick={() => this.props.changeRoute('login')}>Logowanie</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register