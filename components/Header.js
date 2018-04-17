import React, { Component } from 'react';
import {  View,Image, StyleSheet, Text } from 'react-native';

const Header =(props)=> {
  
    return (
      <View style ={styles.header}>
        <Image 
        source ={require('../assets/images/logo.png')}
        style={styles.cart}
        />
        <Text style={styles.text}>{props.headerText}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        height : 50,
        backgroundColor:'#00d2d3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        
    },
    cart:{
        width:40,
        height:40
    },
    text:{
        fontSize: 24,
        marginLeft: 10,
        fontStyle: 'italic',
        color: '#292929',
    }
})


export default Header;