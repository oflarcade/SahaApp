import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import DairyScreen from '../screens/DairyScreen';
import FruitsScreen from '../screens/FruitsScreen';
import VegetablesScreen from '../screens/VegetablesScreen';
import HomeScreen from '../screens/HomeScreen';

const StoreNavigator = StackNavigator(
    {
    Store:{
      screen : HomeScreen
      },
    VegetablesScreen:{
      
      screen: VegetablesScreen,
  
      },
    FruitsScreen:{
      
      screen: FruitsScreen
    },
    DairyScreen : {
      
      screen : DairyScreen
    }
  },{
      headerMode: 'none',
      navigationOptions:{
          headerVisible: false,
        
      }
  });

  export default StoreNavigator;
