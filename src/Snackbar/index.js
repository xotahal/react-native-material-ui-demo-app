import React, { Component, PropTypes } from 'react';

import { Toolbar, Snackbar, BottomNavigation, Button } from '../react-native-material-ui';
import Container from '../Container';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class CardSpec extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            active: 'today',
            hidden: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <Button
                    style={{
                        container: {
                            margin: 16,
                        },
                    }}
                    raised
                    primary
                    text="Show snackbar"
                    onPress={() => this.setState({ visible: true })}
                />
                <Button
                    style={{
                        container: {
                            margin: 16,
                        },
                    }}
                    raised
                    primary
                    text="Toggle bottom navigation"
                    onPress={() => this.setState({ hidden: !this.state.hidden })}
                />
                <BottomNavigation
                    active={this.state.active}
                    hidden={this.state.hidden}
                    style={{
                        container: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                    }}
                >
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
                <Snackbar
                    style={{
                        container: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                    }}
                    visible={this.state.visible}
                    bottomNavigation={!this.state.hidden}
                    message="Hi, I'm a snackbar!"
                    onRequestClose={this.handleRequestClose}
                    actionText="Undo"
                    onActionPress={() => {}}
                />
            </Container>
        );
    }
}

CardSpec.propTypes = propTypes;

export default CardSpec;
