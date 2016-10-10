import { Text, View, StyleSheet, ScrollView, ToastAndroid, Platform } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { ListItem, Subheader, Toolbar } from '../react-native-material-ui/src';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <ScrollView style={styles.container}>
                    <Subheader text="One line" />
                    <ListItem
                        divider
                        centerElement="Center element as a text"
                        onPress={() => {}}
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                        onPress={() => {}}
                    />
                    <ListItem
                        divider
                        centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <ListItem
                        divider
                        dense
                        centerElement="Center element as a text (dense)"
                    />
                    <Subheader text="One line with icon" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                        onPress={() => {}}
                    />


                    <Subheader text="Two lines" />
                    <ListItem
                        divider
                        dense
                        centerElement={{
                            primaryText: 'Center element as an object (dense)',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
                    <Subheader text="Two lines with icon" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        rightElement="info"
                        onLeftElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Left element pressed', ToastAndroid.SHORT);
                            }
                        }}
                        onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                        onRightElementPress={() => {
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                            }
                        }}
                    />
                    <Subheader text="Three lines" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                        }}
                        numberOfLines={3}
                    />
                    <Subheader text="Dynamic" />
                    <ListItem
                        divider
                        leftElement="person"
                        numberOfLines="dynamic"
                        centerElement={{
                            primaryText: 'With dynamic second line',
                            secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        onPress={() => {}}
                    />
                    <Subheader text="Custom" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                    />
                </ScrollView>
            </View>
        );
    }
}

List.propTypes = propTypes;

export default List;
