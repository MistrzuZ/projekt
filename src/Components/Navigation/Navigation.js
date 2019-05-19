import React from 'react';

class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state ={}
    }
    render () {
        const { user } = this.props;
         return (
            <nav className="moj-kolor f5 flex flex-row justify-between">
                    {(this.props.isLogin) ?
                        <div className="menu flex flex-row justify-around">
                            <div onClick={() => this.props.changeRoute('home')} className="pa3 link dim pointer" style={(this.props.route === 'home') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Home</div>
                            <div onClick={() => this.props.changeRoute('predictGeneral')} className="pa3 link dim pointer" style={(this.props.route === 'predictGeneral') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Zawartość obrazka</div>
                            <div onClick={() => this.props.changeRoute('predictFace')} className="pa3 link dim pointer" style={(this.props.route === 'predictFace') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Rozpoznanie twarzy</div>
                        </div>
                    :
                    <div className="menu flex flex-row justify-around">
                        <div onClick={() => this.props.changeRoute('home')} className="pa3 link dim pointer" style={(this.props.route === 'home') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Home</div>
                        <div onClick={() => this.props.changeRoute('login')} className="pa3 link dim pointer" style={(this.props.route === 'login') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Logowanie</div>
                        <div onClick={() => this.props.changeRoute('register')} className="pa3 link dim pointer" style={(this.props.route === 'register') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Rejestracja</div>
                    </div>
                    }
                <div className="menu flex flex-row justify-around">
                    {(this.props.isLogin)
                        ? <div className="flex">
                            <div className="pa3">{`Użycia: ${user.uses}`}</div>
                            <div className="pa3">{user.name}</div>
                            <div onClick={() => this.props.changeLogin(false)} className="ma2 pa2 link pointer o-60">Wyloguj</div>
                        </div>
                        : ''
                    }
                </div>
            </nav>
        )
    }
}

export default Navigation;