import React from 'react';
import HTTPClient from '../js/http.js';

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURLs: []
        };
    }
    render() {
        return (
            <div>
                <img src={this.state.imageURLs[Math.floor(Math.random() * (this.state.imageURLs.length))]}/>
            </div>
        );
    }
    componentDidMount() {
        //load images into state
        let component = this;
        HTTPClient.get('/api/cats', function(res) {
            console.log(JSON.parse(res));
            component.setState({
                imageURLs: JSON.parse(res).urls
            });
        });
    }
}

export default Carousel;
