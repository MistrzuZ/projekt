import React from 'react';
import './InputForm.css';

const InputForm = () => {
    return (
        <div className="witam center pa4 ma5 br3 shadow-5">
            <p>Proszę wkleić link ze zdjęciem</p>
            <div className="center pa2">
                <input
                    className="f4 w-70 center dib"
                    type="url"
                    placeholder="http://interia.com/image.png"
                />
                <input
                    className="f4 w-30 center dib grow dark-gray bg-moon-gray"
                    type="submit"
                    value="GO!"
                />
            </div>
        </div>
    )
}

export default InputForm;