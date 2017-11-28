import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Subheader, Toolbar } from '../react-native-material-ui/src';
import Container from '../Container';

const styles = StyleSheet.create({
    avatarContainer: {
        paddingLeft: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class AvatarSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Avatar"
                />
                <Subheader text="Avatars with text" />
                <View style={styles.avatarContainer}>
                    <Avatar text="C" />
                </View>
                <Subheader text="Avatars with icon" />
                <View style={styles.avatarContainer}>
                    <Avatar icon="person" />
                </View>
            </Container>
        );
    }
}

AvatarSpec.propTypes = propTypes;

export default AvatarSpec;
