import { AppRegistry } from 'react-native';
import App from './App/App.react';
import React, { Component } from 'react';


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
