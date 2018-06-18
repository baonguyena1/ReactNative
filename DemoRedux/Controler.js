import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Controller extends Component {
    render() {
        return(
            <View style={ styleController.container }>
            <Text style={ styleController.controlName }>CONTROLLER COMPONENT</Text>
            <View style={ styleController.buttonContainer }>
                <TouchableOpacity style={ styleController.button} onPress={ this.onDownButtonPress }>
                    <Text style={ styleController.buttonText }>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styleController.button} onPress={ this.onUpButtonPress }>
                    <Text style={ styleController.buttonText }>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }

    onUpButtonPress = () => {
        this.props.dispatch({ type: 'UP' });
    } 
    
    onDownButtonPress = () => {
        this.props.dispatch({ type: 'DOWN' });
    }
}

export default connect()(Controller);

const styleController = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'stretch',
      margin: 20,
      borderRadius: 6.0,
    },
    controlName: {
      fontSize: 20,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingHorizontal: 50,
      paddingVertical: 25,
      margin: 10,
      borderRadius: 5
    },
    buttonText: {
      color: 'white',
      fontSize: 40
    }
  })