import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/appStack/HomeScreen';
import FavoriteScreen from '../screens/appStack/FavoriteScreen';
import CartScreen from '../screens/appStack/CartScreen';
import NotificationScreen from '../screens/appStack/NotificationScreen';
import ProfileScreen from '../screens/appStack/ProfileScreen';
import TabButton from '../common/components/TabButton';
import {Drawables} from '../common/utilities/Drawable';

const Tab = createBottomTabNavigator();

const tabbarOptions = [
  {name: 'Home', screen: HomeScreen, icon: Drawables.HomeTabIcon},
  {name: 'Favorite', screen: FavoriteScreen, icon: Drawables.FavoriteTabIcon},
  {name: 'Cart', screen: CartScreen, icon: Drawables.CartTabIcon},
  {
    name: 'Notification',
    screen: NotificationScreen,
    icon: Drawables.NotificationTabIcon,
  },
  {name: 'Profile', screen: ProfileScreen, icon: Drawables.ProfileTabIcon},
];

const AppNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 80,
            backgroundColor: 'white',
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        {tabbarOptions.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.screen}
              options={{
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
