import { Navigator, View } from 'react-native';
import React, { Component, PropTypes } from 'react';
import routes from '../routes';
import getTheme from '../react-native-material-ui/src/styles/getTheme';

import { ToolbarExperimental as Toolbar } from '../react-native-material-ui';

class App extends Component {
    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }
    getChildContext() {
        return { uiTheme: getTheme() };
    }
    renderScene(route, navigator) {
        return (
            <View>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => navigator.pop()}
                    centerElement={route.title}
                />
                <route.Page
                    navigator={navigator}
                />
            </View>
        );
    }

    render() {
        return (
            <Navigator
                configureScene={App.configureScene}
                initialRoute={routes.home}
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
