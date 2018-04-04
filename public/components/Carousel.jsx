import React from 'react';
import HTTPClient from '../js/http.js';

class Carousel extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.adjustIndex(-1)}>PREV</button>
                <img src={this.props.imageURLs[this.props.index]}/>
                <button onClick={() => this.props.adjustIndex(1)}>NEXT</button>
            </div>
        );
    }
}

export default Carousel;
