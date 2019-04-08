import React from 'react';
import './InputForm.css';

const InputForm = ({ buttonClick }) => {
    return (
        <div className="witam center pa3 ma5 br3 shadow-5">
            <h2>Proszę wkleić link ze zdjęciem</h2>
            <div className="center pa1">
                <input
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