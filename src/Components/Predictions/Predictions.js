import React from 'react';

const Predictions = ({ name, value }) => {
    value = Math.round(value * 10000) / 100
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <div className="f5 pa0">
            <p>{name} {value}%</p>
        </div>
    )
}

export default Predictions;