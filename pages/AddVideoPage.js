import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddVideoPage extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text>Add Video Page</Text>
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

export default AddVideoPage;
