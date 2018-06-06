/**
 * Step 1: Import library
 * Step 2: code for component
 * Step 3: Register main component
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Info extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>{this.props.title}</Text>
                <Text style={style.subTitle}>{this.props.subTitle}</Text>
            </View>
        );
    }
}

export default class HelloWorld extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        return(
            <View style={style.container}>
                {/* <Gretting name='Bao'/>
                <Gretting name='Nguyen'/> */}
                <View style={style.row}>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                </View>
                <View style={style.row}>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                </View>
                <View style={style.row}>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                </View>
                <View style={style.row}>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                    <View style={style.column}></View>
                </View>
            </View>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        backgroundColor: 'gray',
        borderRightColor: 'lightgray',
        borderWidth: 1,
    },
    title: {
        flex: 2,
        textAlign:'center',
    },
    subTitle: {
        flex: 1
    }
});