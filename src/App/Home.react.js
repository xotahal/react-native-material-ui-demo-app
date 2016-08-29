import React, { Component, PropTypes } from 'react';

import routes from '../routes';

import Container from '../Container';
// components
import ListItem from '../react-native-material-ui/lib/List/ListItem';

const propTypes = {
    navigator: PropTypes.object.isRequired,
};

class Home extends Component {
    render() {
        return (
            <Container>
                <ListItem
                    divider
                    centerElement="Avatars"
                    onPress={() => this.props.navigator.push(routes.avatar)}
                />
                <ListItem
                    divider
                    centerElement="List items"
                    onPress={() => this.props.navigator.push(routes.list)}
                />
            </Container>
        );
    }
}

Home.propTypes = propTypes;

export default Home;
