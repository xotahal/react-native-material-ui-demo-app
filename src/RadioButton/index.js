import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

import { RadioButton, Toolbar } from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
    },
});

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

class RadioButtonSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <View style={styles.container}>
                    <RadioButton
                        label="Unchecked"
                        checked={this.state.checked}
                        value="Value"
                        onCheck={checked => this.setState({ checked })}
                    />
                    <RadioButton label="Checked by default" checked value="Value" />
                    <RadioButton
                        label="Custom icon"
                        checked
                        uncheckedIcon="star-border"
                        checkedIcon="star"
                        value="Value"
                    />
                    <RadioButton label="Disabled unchecked" disabled value="Value" />
                    <RadioButton label="Disabled checked" checked disabled value="Value" />
                </View>
            </Container>
        );
    }
}

RadioButtonSpec.propTypes = propTypes;

export default RadioButtonSpec;
