import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar } from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class CardSpec extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Card"
                />
                <Card>
                    <ListItem
                        leftElement={<Avatar text="JM" />}
                        centerElement={{
                            primaryText: 'John Mitri',
                            secondaryText: '3 weeks ago',
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                        </Text>
                    </View>
                </Card>
                <Card>
                    <ListItem
                        leftElement={<Avatar text="MW" />}
                        centerElement={{
                            primaryText: 'Mike Wiliams',
                            secondaryText: '4 weeks ago',
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </Card>
            </Container>
        );
    }
}

CardSpec.propTypes = propTypes;

export default CardSpec;
