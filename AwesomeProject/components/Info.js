import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Info extends Component {
    render() {
        return(
            <View style={style.container}>
                <View style={style.viewTitle}>
                    <Text style={style.title}>{this.props.title}</Text>
                </View>
                <View style={style.viewSubTitle}>
                    <Text style={style.subTitle}>{this.props.subTitle}</Text>
                </View>     
            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1
    },
    viewTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSubTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        position: 'absolute',
        bottom: 0
    },
    subTitle: {
        fontSize: 30,
        position: 'absolute',
        top: 0
    }
});