import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

export default class App extends React.Component {
  state = {
    message: [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date()
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat messages={this.state.message} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
