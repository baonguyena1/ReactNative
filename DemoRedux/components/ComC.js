import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class ComC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'blue'
        };
    }

    render() {
        return ( 
            <View style={ [styles.container, { backgroundColor: this.state.color }] }>
            </View>
        )
    }

    changeColor() {
        this.setState({
            color: 'yellow'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
})