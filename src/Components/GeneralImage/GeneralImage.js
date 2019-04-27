import React from 'react';
import Predictions from '../Predictions/Predictions';
import './GeneralImage.css';

const GeneralImage = ({ url, predict, route }) => {
    return (
        <div className="divek center flex flex-wrap justify-around">
            <div>
                <div className="eldo center pa3 ma3 br3 shadow-5">
                    <img
                        id="image"
                        alt=""
                        src={url}
                    />
                </div>
            </div>
            {(route === 'predictGeneral')
            ?<div>
                <div className="serdecznie center pa3 ma3 br3 shadow-5 tl">
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
            : ''
            }
        </div>
    )
}

export default GeneralImage;