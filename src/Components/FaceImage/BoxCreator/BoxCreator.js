import React from 'react';

const BoxCreator = ({bottomRow, leftCol, rightCol, topRow}) => {
    return (<div
        className="bounding-box"
        style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol
        }}></div>
    )
}

export default BoxCreator;