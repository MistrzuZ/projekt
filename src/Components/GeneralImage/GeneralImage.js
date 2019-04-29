import React from 'react';
import Predictions from '../Predictions/Predictions';
import './GeneralImage.css';

const GeneralImage = ({ input, predict, route, loading }) => {
        return (
        <div className="center" style={(loading) ? {visibility: 'hidden'} : {visibility: 'visible'}} >
            <div>
                <div className="moj-kolor pa3 ma3 br3 shadow-5" style={(route === "predictFace") ? {position: 'absolute'} : {position: ''}}>
                    <img
                        id="generalImage"
                        src={input}
                        alt=""
                        width="500px"
                        heigh="auto"
                    />
                </div>
            </div>
                <div>
                    <div className="moj-kolor pa3 ma3 br3 shadow-5 tl">
                        <h2>Przypuszczenia:</h2>
                        {
                            predict.map((name, i) => {
                                return (
                                    <Predictions
                                        key={i}
                                        name={name.name}
                                        value={name.value}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}

export default GeneralImage;