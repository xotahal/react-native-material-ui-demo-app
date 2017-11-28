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
    home: { screen: Home },
    actionButton: { screen: ActionButton },
    actionButtonToolbar: { screen: ActionButtonToolbar },
    actionButtonSpeedDial: { screen: ActionButtonSpeedDial },
    avatar: { screen: Avatar },
    badge: { screen: Badge },
    bottomNavigation: { screen: BottomNavigation },
    button: { screen: Button },
    card: { screen: Card },
    checkbox: { screen: Checkbox },
    dialog: { screen: Dialog },
    drawer: { screen: Drawer },
    iconToggle: { screen: IconToggle },
    list: { screen: List },
    radioButton: { screen: RadioButton },
    toolbar: { screen: Toolbar },
}, {
    headerMode: 'none',
});

export default AppNavigator;
