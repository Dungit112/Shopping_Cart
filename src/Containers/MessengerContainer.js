import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messenger from './../Components/Messenger';
import propTypes from 'prop-types';
class MessengerContainer extends Component {
    render() {
        var {messenger} = this.props;
        return (
            <div>
                <Messenger messenger={messenger} />
            </div>
        );
    }
}

MessengerContainer.propTypes = {
    messenger : propTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        messenger: state.messenger
    }
}


export default connect(mapStateToProps, null)(MessengerContainer)
