import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import App from './App/App.react';


export default function index() {
    class Root extends Component {
        render() {
            return (
                <App />
            );
        }
    }

    AppRegistry.registerComponent('example', () => Root);
}
