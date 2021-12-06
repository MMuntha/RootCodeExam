import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import TopNavigation from './topNavigation';

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BottomTab() {
  return (
      <Tab.Navigator
      screenOptions={{ showIcon: true, tabBarShowLabel: false }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={TopNavigation} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}