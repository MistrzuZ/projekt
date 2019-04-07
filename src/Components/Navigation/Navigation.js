import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="bar f4 flex flex-row justify-between">
            <div className="menu flex flex-row justify-around">
                <div className="ma2 pa2 link dim pointer">Rozpoznanie obrazka</div>
                <div className="ma2 pa2 link dim pointer">Rozpoznanie obrazka</div>
            </div>
            <div className="menu flex flex-row justify-around">
                <div className="ma2 pa2 link dim pointer">123</div>
            </div>
        </div>
    )
}

export default Navigation;