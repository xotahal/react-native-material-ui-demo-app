import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { COLOR, IconToggle, Subheader, Toolbar } from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        paddingLeft: 4,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class IconToggleSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Icon toggle"
                />
                <Subheader text="Basic (default, colored, disabled)" />
                <View style={styles.rowContainer}>
                    <IconToggle name="star" />
                    <IconToggle name="star" color={COLOR.red500} />
                    <IconToggle name="star" disabled />
                </View>
                <Subheader text="Different size (24, 30, 36)" />
                <View style={styles.rowContainer}>
                    <IconToggle name="person" />
                    <IconToggle name="person" size={30} />
                    <IconToggle
                        name="person"
                        style={{ icon: { width: 36, height: 36 } }}
                    />
                </View>
            </Container>
        );
    }
}

IconToggleSpec.propTypes = propTypes;

export default IconToggleSpec;
