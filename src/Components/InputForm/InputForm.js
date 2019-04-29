import React from 'react';
import './InputForm.css';

const InputForm = ({ buttonClick, inputUpdater }) => {
    return (
        <div>
            <div className="moj-kolor flex-column pa2 ma3 br3 shadow-5">
                <h2>Proszę wkleić link ze zdjęciem</h2>
                <p className="f7">https://i.wpimg.pl/644x429/money.wpcdn.pl/i/h/23/oryg420119.jpg</p>
                <p className="f7">https://cf.ltkcdn.net/family/images/orig/220066-1696x1131-cute-family.jpg</p>
                <p className="f7">https://pikio.pl/static/media/images/370/37088/c/rodzinka-2-featured.jpg</p>
                <p className="f7">https://www.jestemfit.pl/upload/gallery/2016/04/id_10865_1460718211_750x500.jpg</p>
                <p className="f7">https://www.designmom.com/wp-content/uploads/2017/08/blairfamily_oaklandcranes1.jpg</p>
                <div className="center pa1 w-100">
                    <input
                        onChange={inputUpdater}
                        className="f7 b pa2 input-reset ba hover-bg-black hover-white w-100"
                        type="url"
                    />
                    <input
                        onClick={buttonClick}
                        className="f5 w-30 b ph3 pv2 input-reset ba bg-transparent grow pointer f6 dib white"
                        type="submit"
                        value="Proszę zaczynać!"
                    />
                </div>
            </div>
        </div>
    )
}

export default InputForm;