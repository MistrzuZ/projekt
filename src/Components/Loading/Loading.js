import React from 'react';
import {ClipLoader}  from 'react-spinners';

const Loading = () => {
    return (
        <div className='sweet-loading'>
          <ClipLoader
            sizeUnit={"px"}
            size={100}
            color={'#123abc'}
          />
        </div>
    )
}

export default Loading;