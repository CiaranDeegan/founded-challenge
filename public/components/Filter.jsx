import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCats: true,
            showSharks: true
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(field) {
        var state = {};
        state[field] = !this.state[field];
        this.setState(state);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleState('showCats')}>{this.state.showCats ? 'HIDE CATS' : 'SHOW CATS'}</button>
                <button onClick={() => this.toggleState('showSharks')}>{this.state.showSharks ? 'HIDE SHARKS' : 'SHOW SHARKS'}</button>
            </div>
        );
    }

}

export default Gallery;
