import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import BottomTab from './bottomTab';

const Stack = createNativeStackNavigator();

export default function RootStack(){
    return(
        <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Login" component={Login} />     
          <Stack.Screen name="BottomTab" component={BottomTab} />     
        </Stack.Navigator>
      </NavigationContainer>
    )
}