import React, { Component, PropTypes } from 'react';

import routes from '../routes';

import Container from '../Container';
// components
import { ListItem } from '../react-native-material-ui/src';

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
                    centerElement="Buttons"
                    onPress={() => this.props.navigator.push(routes.button)}
                />
                <ListItem
                    divider
                    centerElement="Cards"
                    onPress={() => this.props.navigator.push(routes.card)}
                />
                <ListItem
                    divider
                    centerElement="Checkbox"
                    onPress={() => this.props.navigator.push(routes.checkbox)}
                />
                <ListItem
                    divider
                    centerElement="Dialog"
                    onPress={() => this.props.navigator.push(routes.dialog)}
                />
                <ListItem
                    divider
                    centerElement="Drawer"
                    onPress={() => this.props.navigator.push(routes.drawer)}
                />
                <ListItem
                    divider
                    centerElement="Icon toggles"
                    onPress={() => this.props.navigator.push(routes.iconToggle)}
                />
                <ListItem
                    divider
                    centerElement="List items"
                    onPress={() => this.props.navigator.push(routes.list)}
                />
                <ListItem
                    divider
                    centerElement="Radio buttons"
                    onPress={() => this.props.navigator.push(routes.radioButton)}
                />
            </Container>
        );
    }
}

Home.propTypes = propTypes;

export default Home;
