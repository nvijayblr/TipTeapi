import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class ProfilePage extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.pageContainer}>
        <View style={[styles.socialCircle, styles.userWrapper]}>
          <Text style={styles.userName}>B</Text>
        </View>
        <Text style={styles.name}>@Bhaskar</Text>
        <View style={[styles.row, styles.statWrapper]}>
          <View style={styles.col}>
            <Text style={styles.count}>856</Text>
            <Text style={styles.label}>Following</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.count}>1.2K</Text>
            <Text style={styles.label}>Followers</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.count}>10K</Text>
            <Text style={styles.label}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('EditProfilePage')}
        >
          <Text style={styles.appButtonText}>Edit Profile</Text>
        </TouchableOpacity>
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
  userWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.62)',
    backgroundColor: 'rgba(238, 238, 238, 1)',
  },
  userName: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 30,
  },
  name: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    display: 'flex',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  statWrapper: {
    marginTop: 50,
  },
  label: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  count: {
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(238, 238, 238, 1)',
    fontSize: 40,
    display: 'none',
  },
  appButtonContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.82)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 60,
  },
  appButtonText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.72)',
    fontWeight: '400',
    alignSelf: 'center',
  },
});

export default ProfilePage;
