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
                this.getBoth().then(function(result) {
                    component.setState(result);
                });
            }
            else if(component.state.showCats) {
                this.getOnly('cats').then(function(result) {
                    component.setState(result);
                });
            }
            else if(component.state.showSharks) {
                this.getOnly('sharks').then(function(result) {
                    component.setState(result);
                });
            }
            else {
                component.setState({
                    imageURLs: [],
                    loading: false,
                    imageIdx: 0
                });
            }
        });
    }

    getOnly(animal) {
        return new Promise(function(resolve) {
            HTTPClient.get('/api/' + animal, function(res) {
                let images = JSON.parse(res).urls;
                resolve({
                    imageURLs: images,
                    loading: false,
                    imageIdx: 0
                });
            });
        }); 
    }

    getBoth() {
        return new Promise(function(resolve) {
            let images = [];
            HTTPClient.get('/api/cats', function(res) {
                let cats = JSON.parse(res).urls;
                HTTPClient.get('/api/sharks', function(res) {
                    let sharks = JSON.parse(res).urls;
                    let both = [cats, sharks];

                    //image sets should arrive in random order when both selected
                    both.sort(() => Math.random() - 0.5);
                    images.push.apply(images, both[0]);
                    images.push.apply(images, both[1]);

                    resolve({
                        imageURLs: images,
                        loading: false,
                        imageIdx: 0
                    });
                });
            });
        });
    }

    componentDidMount() {
        this.setImages();
    }

    render() {
        return (
            <div>
                <Filter showCats={this.state.showCats} showSharks={this.state.showSharks} toggleFilterState={this.toggleFilterState}/>
                { this.state.loading ? <h1 className="content has-text-centered">Loading</h1> : <h1 className="content has-text-centered">&nbsp;</h1> }
                { this.state.showCats || this.state.showSharks ? <Carousel imageURLs={this.state.imageURLs} index={this.state.imageIdx} adjustIndex={this.adjustIndex}/>: null}
            </div>
        );
    }
}

export default Gallery;
