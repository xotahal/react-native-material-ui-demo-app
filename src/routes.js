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

export default {
    home: {
        title: 'Select component',
        Page: Home,
    },
    actionButton: {
        title: 'Action buttons',
        Page: ActionButton,
    },
    actionButtonToolbar: {
        title: 'Toolbar transition',
        Page: ActionButtonToolbar,
    },
    actionButtonSpeedDial: {
        title: 'Speed dial transition',
        Page: ActionButtonSpeedDial,
    },
    avatar: {
        title: 'Avatars',
        Page: Avatar,
    },
    badge: {
        title: 'Badge',
        Page: Badge,
    },
    bottomNavigation: {
        title: 'Bottom navigation',
        Page: BottomNavigation,
    },
    button: {
        title: 'Buttons',
        Page: Button,
    },
    card: {
        title: 'Cards',
        Page: Card,
    },
    checkbox: {
        title: 'Checkboxes',
        Page: Checkbox,
    },
    dialog: {
        title: 'Dialogs',
        Page: Dialog,
    },
    drawer: {
        title: 'Drawer',
        Page: Drawer,
    },
    iconToggle: {
        title: 'Icon toggles',
        Page: IconToggle,
    },
    list: {
        title: 'List items',
        Page: List,
    },
    radioButton: {
        title: 'Radio buttons',
        Page: RadioButton,
    },
    toolbar: {
        title: 'Toolbars',
        Page: Toolbar,
    },
};
