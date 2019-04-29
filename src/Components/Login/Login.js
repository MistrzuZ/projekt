import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false
        }
    }

    emailUpdate = (email) => {
        this.setState({email: email.target.value})
    }

    passwordUpdate = (password) => {
        this.setState({password: password.target.value})
    }

    clickLogin = () => {
        this.props.changeLoading(true)
        const email = this.state.email;
        const password = this.state.password;
        if (email === this.props.users.email && password === this.props.users.password) {
            this.props.changeLogin(true)
            this.props.changeRoute('predictGeneral')
            this.props.changeLoading(false)
        } else {
            this.setState({error: true})
            this.props.changeLoading(false)
        }
    }

    render () {
        return (
            <div className="center">
                <form className="measure moj-kolor pa4 ma4 br4 shadow-5">
                    <p className="f3 fw6 ph0 mh0">Logowanie</p>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            onChange={this.emailUpdate}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Hasło</label>
                        <input
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            onChange={this.passwordUpdate}
                        />
                    </div>
                    <div>
                        <input
                            className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib white"
                            type="button"
                            value="Zaloguj"
                            onClick={this.clickLogin}
                        />
                        {(this.state.error) ? <label className="db pt2 fw6 red lh-copy f6">Błędny login lub hasło</label> : ''}
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