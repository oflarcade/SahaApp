import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Header from '../components/Header';
import StoreList from '../components/StoreList';

export default class FruitsScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header headerText={'Fruits'} />
        <StoreList />
      </View>
    );
  }
}
