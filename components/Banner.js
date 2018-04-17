import React, { Component } from 'react';
import {  View,ImageBackground, StyleSheet } from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground  source={require('../assets/images/BioBanner.jpg')} style={styles.banner}>
      <ImageOverlay 
        header ='Welcome to Saha Store'
        paragraph ='A complete Bio Store'
      />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    banner:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    }
})