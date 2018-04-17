import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


import Login from '../screens/Login';
import SinginScreen  from '../screens/SigninScreen';

export default  AuthNavigator = TabNavigator(
    {
    Login:{
      screen : Login
      },
    SingIn:{
      
      screen: SinginScreen,
  
      },
  },
  {
      tabBarComponent:TabBarTop,
      tabBarOptions:'top',
      animationEnabled:true,
      swipeEnabled:true,
      tabBarOptions: {
          activeTintColor: Colors.tabIconSelected,
          inactiveTintColor: Colors.tabIconDefault,
          labelStyle: {
              fontSize: 10,
          },
          style: {
              backgroundColor:'#00d2d3',
              borderTopWidth:1,
              borderTopColor: 'white'
          },
      }  
  });

