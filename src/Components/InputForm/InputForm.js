import React from 'react';
import './InputForm.css';

const InputForm = ({ buttonClick, inputUpdater }) => {
    return (
        <div className="witam center pa3 ma5 br3 shadow-5">
            <h2>Proszę wkleić link ze zdjęciem</h2>
            <p className="f7">https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg</p>
            <div className="center pa1">
                <input
                    onChange={inputUpdater}
                    className="f5 w-70 center dib"
                    type="url"
                    placeholder="http://interia.com/image.png"
                />
                <input
                    onClick={buttonClick}
                    className="f5 w-30 center dib grow dark-gray bg-moon-gray"
                    type="submit"
                    value="Proszę zaczynać!"
                />
            </div>
        </div>
    )
}

export default InputForm;