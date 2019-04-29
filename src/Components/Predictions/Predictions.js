import React from 'react';

const Predictions = ({ name, value }) => {
    value = Math.round(value * 10000) / 100
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <div className="ba pa2 ma1 f6">
            <p className="pa0 ma0">{name} {value}%</p>
        </div>
    )
}

export default Predictions;