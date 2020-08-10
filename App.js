import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStackScreen from './pages/HomeStackScreen';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';
import InboxPage from './pages/InboxPage';
// import AddVideoPage from './pages/AddVideoPage';
import LoginPage from './pages/LoginPage';

const Tab = createBottomTabNavigator();

FontAwesome.loadFont();

// npx pod-install ios

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeStackScreen"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="discoverPage"
            component={DiscoverPage}
            options={{
              tabBarLabel: 'Discover',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="plus-square" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="InboxPage"
            component={InboxPage}
            options={{
              tabBarLabel: 'Inbox',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="minus-square" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{
              tabBarLabel: 'Me',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  socialCircle: {
    position: 'absolute',
    right: 20,
    bottom: 450,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(238, 238, 238, 0.32)',
  },
  userName: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 32,
  },
  likesWrapper: {
    bottom: 350,
  },
  commentsWrapper: {
    bottom: 225,
  },
  sharesWrapper: {
    bottom: 100,
    backgroundColor: 'rgba(29, 189, 0, 0.72)',
  },
  socialCount: {
    fontSize: 18,
    position: 'relative',
    bottom: -4,
    textAlign: 'center',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.72)',
  },
  socialIcon: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 42,
    color: 'rgba(0, 0, 0, 0.72)',
  },
  shareIcon: {
    color: 'rgba(255, 255, 255, 0.62)',
  },
});
