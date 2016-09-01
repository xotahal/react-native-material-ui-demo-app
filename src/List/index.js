import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';

import { ListItem, Subheader } from '../react-native-material-ui/src';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Subheader text="One line" />
                    <ListItem
                        divider
                        centerElement="Center element as a text"
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                    />
                    <ListItem
                        divider
                        dense
                        centerElement="Center element as a text (dense)"
                    />
                    <ListItem
                        divider
                        centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
                    />
                    <Subheader text="Three lines" />
                    <Subheader text="Dynamic" />
                    <ListItem
                        divider
                        leftElement="person"
                        numberOfLines="dynamic"
                        centerElement={{
                            primaryText: 'With dynamic second line',
                            secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit',
                        }}
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

export default List;
