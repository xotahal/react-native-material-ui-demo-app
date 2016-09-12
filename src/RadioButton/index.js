import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { RadioButton } from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
    },
});

class RadioButtonSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <RadioButton
                        label="Unchecked"
                        checked={this.state.checked}
                        value="Value"
                        onCheck={(checked) => this.setState({ checked })}
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

export default RadioButtonSpec;
