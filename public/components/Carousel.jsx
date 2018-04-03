import React from 'react';
import HTTPClient from '../js/http.js';

class Carousel extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imageURLs[Math.floor(Math.random() * (this.props.imageURLs.length))]}/>
            </div>
        );
    }
}

export default Carousel;
