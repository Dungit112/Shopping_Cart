import React, { Component } from 'react';

class Messenger extends Component {
   
    render() {
        var {messenger} = this.props;
        return (
            <h3>
            <span className="badge amber darken-2">{messenger}</span>
          </h3>
        );
    }
}

export default Messenger;