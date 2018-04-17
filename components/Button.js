import React, { Component } from 'react';
import {  TouchableOpacity, Text, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity>
        <MaterialCommunityIcons 
        name='plus-box'
        size={28}
        style={{ marginBottom: -3, width: 25 }}
        color={Colors.buttonColor}
        />
      </TouchableOpacity>
    );
  }
}
