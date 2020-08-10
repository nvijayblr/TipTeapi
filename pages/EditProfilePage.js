import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

class EditProfilePage extends Component {
  state = {
    name: '',
    user: {
      name: '',
      email: '',
      password: '',
    },
  };

  setUsername(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.pageContainer}>
            <Text style={styles.title}>Profile</Text>
            <View style={[styles.row]}>
              <View style={styles.col}>
                <Text style={styles.count}>Name</Text>
                <TextInput style={styles.formInput} />
              </View>
              <View style={styles.col}>
                <Text style={styles.count}>Password</Text>
                <TextInput style={styles.formInput} secureTextEntry />
              </View>
            </View>
            <View style={styles.pageContainer}>
              <Text style={styles.title}>Intersts</Text>
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
                <Text style={styles.categoryLabel}>Beauty</Text>
              </View>
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryLabel}>Art</Text>
              </View>
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryLabel}>Science & Education</Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.appButtonContainer, styles.loginBtn]}
            >
              <Text style={styles.appButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
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
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 34,
  },
  col: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  statWrapper: {
    marginTop: 50,
  },
  label: {
    fontWeight: '500',
    fontSize: 20,
  },
  count: {
    fontWeight: '300',
    fontSize: 20,
    marginBottom: 10,
  },
  signupMsg: {
    marginTop: 30,
    fontSize: 20,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  appButtonContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.82)',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginBtn: {
    marginTop: 20,
    marginBottom: 20,
  },
  facebook: {
    borderColor: '#4267B2',
    backgroundColor: '#4267B2',
    width: 200,
    marginTop: 15,
    marginBottom: 15,
  },
  google: {
    borderColor: '#C94130',
    backgroundColor: '#C94130',
    width: 200,
  },
  appButtonText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.72)',
    fontWeight: '400',
    alignSelf: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  link: {
    color: 'blue',
    paddingLeft: 10,
    paddingRight: 10,
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
});

export default EditProfilePage;
