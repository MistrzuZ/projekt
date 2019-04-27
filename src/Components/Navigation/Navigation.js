import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state ={}
    }
    render () {
         return (
            <div className="bar f4 flex flex-row justify-between">
                <div className="menu flex flex-row justify-around">
                    <div onClick={() => this.props.changeRoute('predictGeneral')} className="ma2 pa2 link dim pointer">Zawartość obrazka</div>
                    <div onClick={() => this.props.changeRoute('predictFace')} className="ma2 pa2 link dim pointer">Rozpoznanie osób</div>
                </div>
                <div className="menu flex flex-row justify-around">
                    <div className="ma2 pa2 link dim pointer">123</div>
                </div>
            </div>
        )
    }
}

export default Navigation;