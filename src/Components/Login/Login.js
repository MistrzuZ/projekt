import React from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false,
        }
        this.validator = new SimpleReactValidator();
    }

    emailUpdate = (email) => {
        this.setState({email: email.target.value})
    }

    passwordUpdate = (password) => {
        this.setState({password: password.target.value})
    }

    clickLogin = () => {
        const email = this.state.email;
        const password = this.state.password;
        if (this.validator.allValid()) {
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password })
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
                .catch(err => console.log(err))
          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
        if (email === 'admin' && password === "1337") {
            this.props.loadUser({
                id: 0,
                name: "admin",
                email: "admin",
                uses: "0",
                joined: "2019-05-13T21:14:10.526Z"
            })
            this.props.changeLogin(true)
            this.props.changeRoute('predictGeneral')
        }
    }

    render () {
        return (
            <div className="center">
                <form className="measure moj-kolor pa4 ma4 br4 shadow-5">
                    <p className="f3 fw6 ph0 mh0">Logowanie</p>
                    <div className="mt3">
                        <p>Defaultowo email: admin Hasło: 1337</p>
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            onChange={this.emailUpdate}
                        />
                        {this.validator.message('email', this.state.email, 'required|email')}
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Hasło</label>
                        <input
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            onChange={this.passwordUpdate}
                        />
                        {this.validator.message('password', this.state.password, 'required|alpha_num_dash')}
                    </div>
                    <div>
                        <input
                            className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib white"
                            type="button"
                            value="Zaloguj"
                            onClick={this.clickLogin}
                        />
                        {(this.state.error) ? <label className="srv-validation-message db">Błędny login lub hasło</label> : ''}
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim db pointer" onClick={() => this.props.changeRoute('register')}>Rejestracja</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login