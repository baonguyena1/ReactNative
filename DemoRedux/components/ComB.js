import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ComC from "./ComC";

export default class ComB extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <ComC ref='comC'/>
            </View>
        )
    }

    clickB() {
        this.refs.comC.changeColor();
    }
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    }
})