import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ComB from './ComB';

export default class ComA extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <ComB ref='comB'/>
            </View>
        )
    }

    clickA() {
        this.refs.comB.clickB();
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})