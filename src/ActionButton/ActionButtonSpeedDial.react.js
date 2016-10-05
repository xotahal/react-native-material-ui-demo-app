import React, { Component, PropTypes } from 'react';
import Container from '../Container';

import { ActionButton, Toolbar } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class ActionButtonSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <ActionButton
                    actions={['email', { icon: 'phone', label: 'Phone' }, 'sms', 'favorite']}
                    icon="share"
                    transition="speedDial"
                />
            </Container>
        );
    }
}

ActionButtonSpec.propTypes = propTypes;

export default ActionButtonSpec;
