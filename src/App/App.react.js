import { Navigator, View } from 'react-native';
import React, { Component } from 'react';
import routes from '../routes';

import { ToolbarExperimental as Toolbar } from '../react-native-material-ui';

class App extends Component {
    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }

    onNavigatorRef(component) {
        this.navigator = component;
    }
    renderScene(route) {
        return (
            <View>
                <Toolbar
                    leftElement="arrow-back"
                    centerElement={route.title}
                />
                <route.Page />
            </View>
        );
    }

    render() {
        return (
            <Navigator
                configureScene={App.configureScene}
                initialRoute={routes.avatar}
                ref={this.onNavigatorRef}
                renderScene={this.renderScene}
            />
        );
    }
}

export default App;
