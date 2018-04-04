import React from 'react';
import styles from './Filter.css'

class Filter extends React.Component {
    render() {
        return (
            <div className={styles.filter + ' has-text-centered'}>
                <button className={this.props.showCats ? 'button is-primary': 'button'}  onClick={() => this.props.toggleFilterState('showCats')}>Cats</button>
                <button className={this.props.showSharks ? 'button is-primary': 'button'} onClick={() => this.props.toggleFilterState('showSharks')}>Sharks</button>
            </div>
        );
    }

}

export default Filter;
