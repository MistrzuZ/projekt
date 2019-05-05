import React from 'react';
import Predictions from './Predictions/Predictions';

const GeneralImage = ({ input, predict, route, loading }) => {
        return (
        <div className="flex flex-wrap flex-row" style={(loading) ? {visibility: 'hidden'} : {visibility: 'visible'}} >
            <div>
                <div className="moj-kolor pa3 ma3 br3 shadow-5" style={(route === "predictFace") ? {position: 'absolute'} : {position: ''}}>
                    <img
                        id="generalImage"
                        src={input}
                        alt=""
                        width="500px"
                        heigh="auto"
                    />
                {(predict === 'bad link') ? <p>Proszę poprawić link :((</p> : ''}
                </div>
            </div>
            {(predict !== 'bad link') ?
            <div>
            <div className="moj-kolor pa3 ma3 br3 shadow-5 tl">
                <p className="f3 mv4 b">Przypuszczenia: </p>
                <div className="flex flex-row flex-wrap measure">
                    { (!loading && predict !== 'bad link') ?
                        predict.map((name, i) => {
                            return (
                                <Predictions
                                    key={i}
                                    name={name.name}
                                    value={name.value}
                                />
                            )
                        })
                        : 'Errorek'
                    }
                </div>
            </div>
        </div>
        : ''}
        </div>
    )
}

export default GeneralImage;