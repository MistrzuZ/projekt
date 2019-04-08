import React from 'react';
import './DisplayerImage.css';

const DisplayerImage = ({ url }) => {
    return (
        <div className="eldo center pa3 ma5 br3 shadow-5">
            <img
                width="700px"
                height="auto"
                id="image"
                alt=""
                src={url}
            />
        </div>
    )
}

// https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg

export default DisplayerImage;