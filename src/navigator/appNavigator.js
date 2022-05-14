import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sports from '../screens/Sports';
import Leagues from '../screens/Leagues';
import Teams from '../screens/Teams';
import SportDetails from '../screens/SportDetails';
import {Text} from 'react-native';

import React from 'react';

const Tab = createBottomTabNavigator();
const SportStack = createNativeStackNavigator();
const LeagueStack = createNativeStackNavigator();

const LeagueStackScreen = () => (
  <LeagueStack.Navigator>
    <LeagueStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#0AA1DD',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      name="League"
      component={Leagues}
    />
    <LeagueStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#0AA1DD',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      name="Teams"
      component={Teams}
    />
  </LeagueStack.Navigator>
);

const SportStackScreen = () => (
  <SportStack.Navigator>
    <SportStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#0AA1DD',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      name="Sport"
      component={Sports}
    />
    <SportStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#0AA1DD',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      name="SportDetails"
      component={SportDetails}
    />
  </SportStack.Navigator>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#0AA1DD',
        tabBarActiveBackgroundColor: '#0AA1DD',
        tabBarInactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Text></Text>,
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: '700',
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
          },
          headerTitleStyle: {
            color: '#0AA1DD',
          },
        }}
        name="Sports"
        component={SportStackScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Text></Text>,
          tabBarLabelStyle: {
            fontSize: 17,
            paddingTop: 8,
            fontWeight: '700',
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        name="Leagues"
        component={LeagueStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
