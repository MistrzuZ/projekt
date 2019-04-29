import React from 'react';
import BoxCreator from '../BoxCreator/BoxCreator';

class FaceImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <div className="center" style={(this.props.loading) ? {visibility: 'hidden'} : {visibility: 'visible'}} >
                    <div className="moj-kolor absolute pa3 ma3 br3 shadow-5">
                        <img
                            id="faceImage"
                            src={this.props.input}
                            alt=""
                            width="500px"
                            heigh="auto"
                        />
                        {this.props.predict.map((box, i) => {
                            return (
                                <BoxCreator
                                    key={i}
                                    bottomRow={box.bottomRow}
                                    leftCol={box.leftCol}
                                    rightCol={box.rightCol}
                                    topRow={box.topRow}
                                />
                            )})
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FaceImage