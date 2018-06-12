import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Child from './components/Child';
import ButtonComp from './components/Button';

class Main extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child/>
                </View>
                <View style={{flex: 1}}>
                    <ButtonComp title="Increase"
                        textColor="#fff"
                        bgColor="#397af8"
                        onPress={() =>{}}/>
                    <ButtonComp 
                        title="Decrease"
                        bgColor="orange"
                        onPress={() =>{}}/>
                </View>
            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: '#15c'
    }
})