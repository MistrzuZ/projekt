import React from 'react';
import Predictions from '../Predictions/Predictions';
import BoxCreator from './BoxCreator/BoxCreator';
import './GeneralImage.css';

const GeneralImage = ({ input, predict, route, loading }) => {
        return (
        <div className="center" style={(loading) ? {visibility: 'hidden'} : {visibility: 'visible'}} >
            <div>
                <div className="box-image absolute mt2 pa2">
                    <img
                        id="image"
                        src={input}
                        alt=""
                        width="500px"
                        heigh="auto"
                    />
                    {(route === "predictFace" && !loading)
                        ? predict.map((box, i) => {
                            return (
                                <BoxCreator
                                    key={i}
                                    bottomRow={box.bottomRow}
                                    leftCol={box.leftCol}
                                    rightCol={box.rightCol}
                                    topRow={box.topRow}
                                />
                            )
                        })
                        : ''
                    }
                </div>
            </div>
            {(route === 'predictGeneral' && !loading)
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