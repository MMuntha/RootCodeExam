import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExpertTab from '../screens/topNavigation/expertsTab';
import ServiceTab from '../screens/topNavigation/servicesTab';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExpertTab" component={ExpertTab} />
      <Tab.Screen name="ServiceTab" component={ServiceTab} />
    </Tab.Navigator>
  );
}