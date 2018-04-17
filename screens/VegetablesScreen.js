import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import StoreListVegi from '../components/StoreListVegi';
import Header from '../components/Header';

export default class FruitsScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header headerText={'Vegetables'} />
        <StoreListVegi />
      </View>
    );
  }
}
