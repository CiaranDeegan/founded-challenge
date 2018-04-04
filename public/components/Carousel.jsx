import React from 'react';
import styles from './Carousel.css'

class Carousel extends React.Component {
    render() {
        return (
            <div className={styles.carousel}>
                <button className="button is-info" onClick={() => this.props.adjustIndex(-1)}>&lt;</button>
                <figure className="image">
                    <img src={this.props.imageURLs[this.props.index]}/>
                </figure>
                <button className="button is-info" onClick={() => this.props.adjustIndex(1)}>&gt;</button>
            </div>
        );
    }
}

export default Carousel;
