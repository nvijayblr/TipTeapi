import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SettingsPage extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Animals</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Comedy</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Travel</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Sports</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text>Beauty & Style</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Art</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryLabel}>Science & Education</Text>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
  },
  categoryWrapper: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    marginBottom: 20,
    minWidth: 200,
    textAlign: 'center',
  },
  categoryLabel: {
    textAlign: 'center',
  },
  categoryName: {},
});

export default SettingsPage;
