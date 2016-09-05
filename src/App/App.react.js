import { Navigator } from 'react-native';
import React, { Component, PropTypes } from 'react';
import routes from '../routes';
import getTheme from '../react-native-material-ui/src/styles/getTheme';
import Container from '../Container';

import { Toolbar } from '../react-native-material-ui/src';

class App extends Component {
    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }
    getChildContext() {
        return { uiTheme: getTheme() };
    }
    renderScene(route, navigator) {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => navigator.pop()}
                    centerElement={route.title}
                    rightElement="person"
                />
                <route.Page
                    navigator={navigator}
                />
            </Container>
        );
    }

    render() {
        return (
            <Navigator
                configureScene={App.configureScene}
                initialRoute={routes.card}
                ref={this.onNavigatorRef}
                renderScene={this.renderScene}
            />
        );
    }
}

App.childContextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

export default App;
