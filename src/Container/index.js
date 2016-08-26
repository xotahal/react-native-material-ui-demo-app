import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

const propTypes = {
    children: PropTypes.node,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;
