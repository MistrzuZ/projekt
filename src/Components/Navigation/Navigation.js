import React from 'react';

class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state ={}
    }
    render () {
         return (
            <div className="moj-kolor f4 flex flex-row justify-between">
                <div className="menu flex flex-row justify-around">
                    <div onClick={() => this.props.changeRoute('predictGeneral')} className="pa3 link dim pointer" style={(this.props.route === 'predictGeneral') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Zawartość obrazka</div>
                    <div onClick={() => this.props.changeRoute('predictFace')} className="pa3 link dim pointer" style={(this.props.route === 'predictFace') ? {opacity: 1, borderBottom: 'solid 1px'} : {opacity: 0.6}}>Rozpoznanie osób</div>
                </div>
                <div className="menu flex flex-row justify-around">
                    <div className="ma2 pa2 link dim pointer">123</div>
                </div>
            </div>
        )
    }
}

export default Navigation;