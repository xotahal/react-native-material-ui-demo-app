import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { Divider } from '../react-native-material-ui';
import ListItem from '../react-native-material-ui/lib/List/ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ListItem centerElement="Center element as a text" />
                <Divider />
                <ListItem
                    centerElement={{
                        primaryText: 'Center element as an object',
                    }}
                />
                <Divider />
                <ListItem
                    centerElement={{
                        primaryText: 'Center element as an object',
                        secondaryText: 'Subtext',
                    }}
                />
                <Divider />
                <ListItem
                    leftElement="person"
                    centerElement={{
                        primaryText: 'Center element as an object',
                    }}
                />
                <Divider />
                <ListItem
                    leftElement="person"
                    centerElement={{
                        primaryText: 'Center element as an object',
                        secondaryText: 'Subtext',
                    }}
                />
                <Divider />
                <ListItem
                    leftElement="person"
                    centerElement={<Text>Custom center element</Text>}
                />
                <Divider />
            </View>
        );
    }
}

export default List;
