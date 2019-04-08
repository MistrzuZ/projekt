import React from 'react';
import Predictions from '../Predictions/Predictions';
import './DisplayerImage.css';

const DisplayerImage = ({ url, predict }) => {
    return (
        <div className="flex flex-wrap">
            <div className="eldo center pa3 ma2 br3 shadow-5">
                <img
                    width="700px"
                    height="auto"
                    id="image"
                    alt=""
                    src={url}
                />
            </div>
            <div className="serdecznie center pa3 ma2 br3 shadow-5">
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
    )
}

// https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg

export default DisplayerImage;