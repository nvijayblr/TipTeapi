import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class InboxPage extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text>Inbox Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InboxPage;
