import React from 'react';
import './InputForm.css';

const InputForm = ({ buttonClick, inputUpdater }) => {
    return (
        <div className="center flex-column witam pa3 ma3 br3 shadow-5">
            <h2>Proszę wkleić link ze zdjęciem</h2>
            <p className="f7">https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg</p>
            <p className="f7">https://cf.ltkcdn.net/family/images/orig/220066-1696x1131-cute-family.jpg</p>
            <div className="center pa1 w-100">
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