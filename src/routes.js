import { StackNavigator } from 'react-navigation';

import Home from './App/Home.react';
// components
import ActionButton from './ActionButton';
import ActionButtonToolbar from './ActionButton/ActionButtonToolbar.react';
import ActionButtonSpeedDial from './ActionButton/ActionButtonSpeedDial.react';
import Avatar from './Avatar';
import BottomNavigation from './BottomNavigation';
import Badge from './Badge';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import Dialog from './Dialog';
import Drawer from './Drawer';
import IconToggle from './IconToggle';
import List from './List';
import RadioButton from './RadioButton';
import Toolbar from './Toolbars';

const AppNavigator = StackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    actionButton: {
        screen: ActionButton,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    actionButtonToolbar: {
        screen: ActionButtonToolbar,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    actionButtonSpeedDial: {
        screen: ActionButtonSpeedDial,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    avatar: {
        screen: Avatar,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    badge: {
        screen: Badge,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    bottomNavigation: {
        screen: BottomNavigation,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    button: {
        screen: Button,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    card: {
        screen: Card,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    checkbox: {
        screen: Checkbox,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    dialog: {
        screen: Dialog,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    drawer: {
        screen: Drawer,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    iconToggle: {
        screen: IconToggle,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    list: {
        screen: List,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    radioButton: {
        screen: RadioButton,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    toolbar: {
        screen: Toolbar,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
}, {
    headerMode: 'none',
});

export default AppNavigator;
