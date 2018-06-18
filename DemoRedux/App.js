import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ComA from './components/ComA';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styleApp.container }>
        <View style={ styleApp.header }>
          <Text style={ styleApp.appName }>EXAMPLE 1:{'\n'}APP COMPONENT</Text>
          <Text style={ styleApp.value }>0</Text>
        </View>
        <View style={ styleController.container }>
          <Text style={ styleController.controlName }>CONTROLLER COMPONENT</Text>
          <View style={ styleController.buttonContainer }>
            <TouchableOpacity style={ styleController.button}>
              <Text style={ styleController.buttonText }>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styleController.button}>
            <Text style={ styleController.buttonText }>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  header : {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  value: {
    color: 'yellow',
    fontSize: 30
  }
});

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
