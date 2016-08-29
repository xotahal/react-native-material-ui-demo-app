import Home from './App/Home.react';
// components
import ActionButton from './ActionButton';
import Avatar from './Avatar';
import List from './List';

export default {
    home: {
        title: 'Select component',
        Page: Home,
    },
    actionButton: {
        title: 'Action button',
        Page: ActionButton,
    },
    avatar: {
        title: 'Avatars',
        Page: Avatar,
    },
    list: {
        title: 'List items',
        Page: List,
    },
};
