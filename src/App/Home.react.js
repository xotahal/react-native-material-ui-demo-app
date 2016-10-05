import React, { Component, PropTypes } from 'react';
import { ToastAndroid, ScrollView, Platform } from 'react-native';

import routes from '../routes';

import Container from '../Container';
// components
import { ActionButton, Avatar, ListItem, Toolbar, COLOR } from '../react-native-material-ui/src';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            searchText: '',
        };
    }
    onAvatarPressed = (value) => {
        const { selected } = this.state;

        const index = selected.indexOf(value);

        if (index >= 0) {
            // remove item
            selected.splice(index, 1);
        } else {
            // add item
            selected.push(value);
        }

        this.setState({ selected });
    }
    renderToolbar = () => {
        if (this.state.selected.length > 0) {
            return (
                <Toolbar
                    key="toolbar"
                    leftElement="clear"
                    onLeftElementPress={() => this.setState({ selected: [] })}
                    centerElement={this.state.selected.length.toString()}
                    rightElement={['delete']}
                    style={{
                        container: { backgroundColor: 'white' },
                        titleText: { color: 'rgba(0,0,0,.87)' },
                        leftElement: { color: 'rgba(0,0,0,.54)' },
                        rightElement: { color: 'rgba(0,0,0,.54)' },
                    }}
                />
            );
        }
        return (
            <Toolbar
                key="toolbar"
                leftElement="menu"
                onLeftElementPress={() => this.props.navigator.pop()}
                centerElement={this.props.route.title}
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText: value => this.setState({ searchText: value }),
                    onSearchClosed: () => this.setState({ searchText: '' }),
                }}
            />
        );
    }
    renderItem = (title, route) => {
        const searchText = this.state.searchText.toLowerCase();

        if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
            return null;
        }

        return (
            <ListItem
                divider
                leftElement={<Avatar text={title[0]} />}
                onLeftElementPress={() => this.onAvatarPressed(title)}
                centerElement={title}
                onPress={() => this.props.navigator.push(route)}
            />

        );
    }
    render() {
        return (
            <Container>
                {this.renderToolbar()}
                <ScrollView
                    keyboardShouldPersistTaps
                    keyboardDismissMode="interactive"
                >
                    {this.renderItem('Action buttons', routes.actionButton)}
                    {this.renderItem('Avatars', routes.avatar)}
                    {this.renderItem('Buttons', routes.button)}
                    {this.renderItem('Cards', routes.card)}
                    {this.renderItem('Checkbox', routes.checkbox)}
                    {this.renderItem('Dialog', routes.dialog)}
                    {this.renderItem('Drawer', routes.drawer)}
                    {this.renderItem('Icon toggles', routes.iconToggle)}
                    {this.renderItem('List items', routes.list)}
                    {this.renderItem('Radio buttons', routes.radioButton)}
                    {this.renderItem('Toolbars', routes.toolbar)}
                </ScrollView>
                <ActionButton
                    actions={['email', 'phone', 'sms', 'favorite']}
                    icon="share"
                    transition="speedDial"
                    onPress={(action) => {
                        if (Platform.OS === 'android') {
                            ToastAndroid.show(action, ToastAndroid.SHORT);
                        }
                    }}
                />
            </Container>
        );
    }
}

Home.propTypes = propTypes;

export default Home;
