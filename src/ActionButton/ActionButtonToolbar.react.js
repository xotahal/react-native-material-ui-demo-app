import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Container from '../Container';

import { ActionButton, Toolbar } from '../react-native-material-ui';

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class ActionButtonSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Action button - toolbar"
                />
                <ActionButton
                    actions={['email', 'phone', 'sms', 'favorite']}
                    icon="share"
                    transition="toolbar"
                />
            </Container>
        );
    }
}

ActionButtonSpec.propTypes = propTypes;

export default ActionButtonSpec;
