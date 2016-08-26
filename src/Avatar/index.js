import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { Avatar } from '../react-native-material-ui/';
import Container from '../Container';

const styles = StyleSheet.create({
    avatarContainer: {
        padding: 16,
    },
});

class AvatarSpec extends Component {
    render() {
        return (
            <Container>
                <View style={styles.avatarContainer}>
                    <Avatar text="C" />
                </View>
                <View style={styles.avatarContainer}>
                    <Avatar icon="person" />
                </View>
            </Container>
        );
    }
}

export default AvatarSpec;
