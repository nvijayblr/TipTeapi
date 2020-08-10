import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './HomePage';
import VideoPage from './VideoPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import EditProfilePage from './EditProfilePage';

const HomeStack = createStackNavigator();

class HomeStackScreen extends Component {
  render() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="Home" component={HomePage} />
        <HomeStack.Screen name="VideoPage" component={VideoPage} />
        <HomeStack.Screen name="SignupPage" component={SignupPage} />
        <HomeStack.Screen name="LoginPage" component={LoginPage} />
        <HomeStack.Screen name="EditProfilePage" component={EditProfilePage} />
      </HomeStack.Navigator>
    );
  }
}

export default HomeStackScreen;
