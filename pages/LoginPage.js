import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class LoginPage extends Component {
  state = {
    name: '',
    user: {
      name: '',
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    console.log('Login init...');
  }

  setUsername(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.pageContainer}>
        <Text style={styles.title}>Sign in to your account</Text>
        <View style={[styles.row, styles.statWrapper]}>
          <View style={styles.col}>
            <Text style={styles.count}>Email</Text>
            <TextInput style={styles.formInput} />
          </View>
          <View style={styles.col}>
            <Text style={styles.count}>Password</Text>
            <TextInput style={styles.formInput} secureTextEntry />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={[styles.appButtonContainer, styles.loginBtn]}>
          <Text style={styles.appButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={[styles.appButtonContainer, styles.google]}>
          <Text style={[styles.appButtonText, styles.whiteText]}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={[styles.appButtonContainer, styles.facebook]}>
          <Text style={[styles.appButtonText, styles.whiteText]}>Login with Facebook</Text>
        </TouchableOpacity>

        <Text style={styles.signupMsg}>
          Don't have account?
          <Text style={styles.link} onPress={() => navigation.navigate('SignupPage')}>
            &nbsp;Sign up&nbsp;
          </Text>
          here.
        </Text>
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
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 30,
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
    fontSize: 16,
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
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default LoginPage;
