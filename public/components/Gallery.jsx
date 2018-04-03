import React from 'react';
import Filter from './Filter.jsx';
import Carousel from './Carousel.jsx';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Filter/>
                <Carousel/>
            </div>
        );
    }
}

export default Gallery;