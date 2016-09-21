import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../Container';

import { Toolbar, Button } from '../react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
});

class ToolbarSpec extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Toolbar
                        centerElement="With menu"
                        rightElement={{
                            actions: ['edit'],
                            menu: { labels: ['Item 1', 'Item 2'] },
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="menu"
                        centerElement="Searchable"
                        searchable={{
                            autoFocus: true,
                            placeholder: 'Search',
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="clear"
                        centerElement="With button"
                        rightElement={
                            <Button
                                text="Save"
                                style={{ text: { color: 'white' } }}
                            />
                        }
                    />
                </View>
                <View style={styles.container}>
                    <Toolbar centerElement="Only title" />
                </View>
            </Container>
        );
    }
}

export default ToolbarSpec;
