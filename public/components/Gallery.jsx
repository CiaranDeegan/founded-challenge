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
            imageIdx: 0,
            loading: true,
        };

        this.toggleFilterState = this.toggleFilterState.bind(this);
        this.adjustIndex = this.adjustIndex.bind(this);
    }

    toggleFilterState(field) {
        var state = {};
        state[field] = !this.state[field];
        this.setState(state, function() {
            this.setImages();
        });
    }

    adjustIndex(adjustment) {
        let result = this.state.imageIdx + adjustment;

        if(result < 0) result = this.state.imageURLs.length - 1;
        else if (result > this.state.imageURLs.length - 1) result = 0;

        this.setState({imageIdx: result});
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
                            loading: false,
                            imageIdx: 0
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
                        loading: false,
                        imageIdx: 0
                    });
                });
            }
            else if(component.state.showSharks) {
                console.log('sharks');
                HTTPClient.get('/api/sharks', function(res) {
                    images.push.apply(images, JSON.parse(res).urls)
                    component.setState({
                        imageURLs: images,
                        loading: false,
                        imageIdx: 0
                    });
                });
            }
            else {
                console.log('neither');
                component.setState({
                    imageURLs: [],
                    loading: false,
                    imageIdx: 0
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
                <Filter showCats={this.state.showCats} showSharks={this.state.showSharks} toggleFilterState={this.toggleFilterState}/>
                { this.state.showCats || this.state.showSharks ? <Carousel imageURLs={this.state.imageURLs} index={this.state.imageIdx} adjustIndex={this.adjustIndex}/>: null}
            </div>
        );
    }
}

export default Gallery;
