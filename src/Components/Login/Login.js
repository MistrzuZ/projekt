import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="center">
                <form className="measure moj-kolor pa4 ma4 br4 shadow-5">
                    <p className="f4 fw6 ph0 mh0">Zaloguj</p>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Hasło</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" />
                    </div>
                    <div>
                        <input className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib" type="submit" value="Login" />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim db pointer">Zarejestruj</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login