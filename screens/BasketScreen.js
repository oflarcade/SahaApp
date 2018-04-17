import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';
import Header from '../components/Header';

export default class BasketScreen extends Component {

    static navigationOptions = { header: null, };
    state={cartItems: null,};

    _renderScreen(){
        if(this.state.cartItems === null)
        return(
            <View>
                <Text>You have nothing in your  shopping Cart</Text>
            </View>
        );
        else {
            return null;
        }
    }


  render() {
    return (
        <View>
            <Header />
            <View style={styles.container}>
            {this._renderScreen()}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    contentContainer: {
      
    }
  });
