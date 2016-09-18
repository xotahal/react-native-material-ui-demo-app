import React, { Component } from 'react';
import Container from '../Container';

import { ActionButton } from '../react-native-material-ui';

class ActionButtonSpec extends Component {
    render() {
        return (
            <Container>
                <ActionButton
                    actions={['email', 'phone', 'sms', 'favorite']}
                    icon="share"
                    transition="toolbar"
                />
            </Container>
        );
    }
}

export default ActionButtonSpec;
