/**
 * Step 1: Import library
 * Step 2: code for component
 * Step 3: Register main component
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Info from './components/Info';

export default class HelloWorld extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        return(
            <View style={style.container}>
                <View style={style.row}>
                    
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                </View>
                <View style={style.row}>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                    <Info title='1' subTitle='abc'/>
                    </View>
                </View>
                <View style={style.row}>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                    <Info title='1' subTitle='abc'/>
                    </View>
                </View>
                <View style={style.row}>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
                    <View style={style.column}>
                        <Info title='1' subTitle='abc'/>
                    </View>
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
        borderRightColor: 'lightgray',
        borderWidth: 1
    }
});