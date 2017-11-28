import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ListItem, Toolbar } from '../react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class ActionButtonSpec extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Action buttons"
                />
                <ListItem
                    divider
                    centerElement="With toolbar transition"
                    onPress={() => this.props.navigation.navigate('actionButtonToolbar')}
                />
                <ListItem
                    divider
                    centerElement="With speed dial transition"
                    onPress={() => this.props.navigation.navigate('actionButtonSpeedDial')}
                />
            </View>
        );
    }
}

ActionButtonSpec.propTypes = propTypes;

export default ActionButtonSpec;
