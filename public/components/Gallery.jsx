import React from 'react';
import HTTPClient from '../js/http.js';
import Filter from './Filter.jsx';
import Carousel from './Carousel.jsx';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCats: true,
            showSharks: true,
            imageURLs: [],
            loading: true
        };

        this.toggleFilterState = this.toggleFilterState.bind(this);
    }

    toggleFilterState(field) {
        var state = {};
        state[field] = !this.state[field];
        this.setState(state, function() {
            this.setImages();
        });
    }

    setImages() {
        let component = this;
        let images = [];

        component.setState({loading: true}, function() {
            if(component.state.showCats && component.state.showSharks) {
                console.log('both');
                HTTPClient.get('/api/cats', function(res) {
                    images.push.apply(images, JSON.parse(res).urls)
                    HTTPClient.get('/api/sharks', function(res) {
                        images.push.apply(images, JSON.parse(res).urls);
                        component.setState({
                            imageURLs: images,
                            loading: false
                        });
                    });
                });
            }
            else if(component.state.showCats) {
                console.log('cats');
                HTTPClient.get('/api/cats', function(res) {
                    images.push.apply(images, JSON.parse(res).urls)
                    component.setState({
                        imageURLs: images,
                        loading: false
                    });
                });
            }
            else if(component.state.showSharks) {
                console.log('sharks');
                HTTPClient.get('/api/sharks', function(res) {
                    images.push.apply(images, JSON.parse(res).urls)
                    component.setState({
                        imageURLs: images,
                        loading: false
                    });
                });
            }
            else {
                console.log('neither');
                component.setState({
                    imageURLs: [],
                    loading: false
                });
            }
        });
    }

    componentDidMount() {
        this.setImages();
    }

    render() {
        return (
            <div>
                { this.state.loading ? <h1>Loading</h1> : null }
                <Filter toggleFilterState={this.toggleFilterState}/>
                <Carousel imageURLs={this.state.imageURLs}/>
            </div>
        );
    }
}

export default Gallery;
