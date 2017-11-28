import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Badge, Button, Icon, Toolbar, Subheader, Avatar } from '../react-native-material-ui/src';
import Container from '../Container';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
    },
    badgeContainer: {
        paddingLeft: 24,
    },
});
const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class BadgeSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Badge"
                />
                <Subheader text="Badge with icons" />
                <View style={styles.rowContainer}>
                    <View style={styles.badgeContainer}>
                        <Badge text="3" >
                            <Icon name="star" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            text="13"
                            accent
                        >
                            <Icon name="person" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge accent >
                            <Icon name="warning" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            text="13"
                            accent
                            style={{ container: { bottom: -8, right: -12 } }}
                        >
                            <Icon name="star" />
                        </Badge>
                    </View>
                </View>
                <Subheader text="Badge with button" />
                <View style={styles.rowContainer}>
                    <View style={styles.badgeContainer}>
                        <Badge accent text="8" >
                            <Button text="Flat" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            text="5"
                            accent
                            style={{ container: { top: -12, right: -20 } }}
                        >
                            <Button
                                raised
                                primary
                                text="Raised"
                            />
                        </Badge>
                    </View>
                </View>
                <Subheader text="Badge with text" />
                <View style={styles.rowContainer}>
                    <View style={styles.badgeContainer}>
                        <Badge text="2" >
                            <Text style={{ padding: 8 }}>Text badge</Text>
                        </Badge>
                    </View>
                </View>
                <Subheader text="Badge with icon" />
                <View style={styles.rowContainer}>
                    <View style={styles.badgeContainer}>
                        <Badge
                            size={24}
                            icon="star"
                            style={{ container: { bottom: -8, right: -12 } }}
                        >
                            <Avatar text="BR" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            size={24}
                            accent
                            icon={{
                                name: 'speaker-notes',
                                color: 'white',
                            }}
                            style={{ container: { top: -8, right: -12 } }}
                        >
                            <Avatar text="TR" />
                        </Badge>
                    </View>
                </View>
                <Subheader text="Badge with strokes" />
                <View style={styles.rowContainer}>
                    <View style={styles.badgeContainer}>
                        <Badge
                            size={24}
                            stroke={4}
                            icon="star"
                            style={{ strokeContainer: { bottom: -8, right: -12 } }}
                        >
                            <Avatar text="BR" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            size={24}
                            stroke={8}
                            accent
                            icon={{
                                name: 'speaker-notes',
                                color: 'white',
                            }}
                            style={{ strokeContainer: { top: -8, right: -12 } }}
                        >
                            <Avatar text="TR" />
                        </Badge>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Badge
                            accent
                            size={12}
                            stroke={4}
                            style={{ strokeContainer: { top: 0, right: 0 } }}
                        >
                            <Icon name="notifications" />
                        </Badge>
                    </View>
                </View>
            </Container>
        );
    }
}

BadgeSpec.propTypes = propTypes;

export default BadgeSpec;
