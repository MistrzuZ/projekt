import React from 'react';
import './InputForm.css';

const InputForm = () => {
    return (
        <div>
            <p>Proszę wkleić link ze zdjęciem</p>
            <div className="center pa2 br3 shadow-5 inputer">
                <input
                    className="f5 w-60 center br2 mr2-ns"
                    type="url"
                    placeholder="http://interia.com/image.png"
                />
                <input
                    className="f5 w-35 center grow br3 dark-gray bg-moon-gray"
                    type="submit"
                    value="prosze mi to zrobić"
                />
            </div>
        </div>
    )
}

export default InputForm;