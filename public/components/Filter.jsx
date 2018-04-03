import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.toggleFilterState('showCats')}>Cats</button>
                <button onClick={() => this.props.toggleFilterState('showSharks')}>Sharks</button>
            </div>
        );
    }

}

export default Filter;
