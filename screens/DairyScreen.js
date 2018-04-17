import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import StoreList from '../components/StoreList';
import Header from '../components/Header';

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
