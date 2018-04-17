import React from 'react';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';


import PedometerScreen from '../screens/PedometerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BasketScreen from '../screens/BasketScreen';
import StoreNavigator from './StoreNavigator';




//the stack navigator from the content of vegetables, fruits, dairy






// this is the tab navigator for the store, pedometer, profile
export default TabNavigator(
  {
    Store: {
      screen: StoreNavigator,
    },
    Pedometer: {
      screen: PedometerScreen,
    },
    Profile: {
      screen: SettingsScreen,
    },
    Cart: {
      screen : BasketScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Store':
            iconName = 'store';
            break;
          case 'Pedometer':
            iconName = 'run-fast';
            break;
          case 'Profile':
            iconName = 'face-profile';
            break;
            case 'Cart':
              iconName= 'cart';
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#00d2d3',
        borderTopWidth: 1,
        borderTopColor: 'white'
      },
    }
  }
);
