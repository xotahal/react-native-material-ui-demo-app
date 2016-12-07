import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Container from '../Container';

import { Toolbar, BottomNavigation, Icon } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class BottomNavigationSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { active: 'today' };
    }
    componentWillUpdate
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={this.state.active} size={54} />
                </View>
                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="Today"
                        onPress={() => this.setState({ active: 'today' })}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"
                        label="People"
                        onPress={() => this.setState({ active: 'people' })}
                    />
                    <BottomNavigation.Action
                        key="bookmark-border"
                        icon="bookmark-border"
                        label="Bookmark"
                        onPress={() => this.setState({ active: 'bookmark-border' })}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.setState({ active: 'settings' })}
                    />
                </BottomNavigation>
            </Container>
        );
    }
}

BottomNavigationSpec.propTypes = propTypes;

export default BottomNavigationSpec;
