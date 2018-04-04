import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="has-text-centered">
                <button className={this.props.showCats ? 'button is-primary': 'button'}  onClick={() => this.props.toggleFilterState('showCats')}>Cats</button>
                <button className={this.props.showSharks ? 'button is-primary': 'button'} onClick={() => this.props.toggleFilterState('showSharks')}>Sharks</button>
            </div>
        );
    }

}

export default Filter;
