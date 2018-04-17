import React, { Component } from 'react';
import {  View,ImageBackground, StyleSheet ,TouchableOpacity } from 'react-native';
import ImageOverlay from './ImageOverlay';


export default class CustomImage extends Component {

  render() {
    const title = '';
    return (
      <TouchableOpacity style={styles.touchableopacity} onPress={this.props.onPress}  title>
        <ImageBackground source={this.props.imageSource} style={styles.image}>
         <ImageOverlay header= {this.props.header} paragraph = {this.props.paragraph} />
       </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableopacity:{
      width : '100%'
    }
})