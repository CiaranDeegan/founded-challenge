import React from 'react';
import Filter from './Filter.jsx';
import Carousel from './Carousel.jsx';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCats: true,
            showSharks: true
        };

        this.toggleFilterState = this.toggleFilterState.bind(this);
    }

    toggleFilterState(field) {
        var state = {};
        state[field] = !this.state[field];
        this.setState(state);
    }

    render() {
        return (
            <div>
                <Filter toggleFilterState={this.toggleFilterState}/>
                <Carousel/>
            </div>
        );
    }
}

export default Gallery;
