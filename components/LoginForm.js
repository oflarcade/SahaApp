import React, { Component } from 'react';
import {  View,StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';


export default class LoginForm extends Component {
 // here we initialize the state of the loginform component 
 state = { email: '', password: '', error:'' , loading: false };
 
 
 render() {
    return (
        <View style={styles.container}>
        <TextInput
          value={this.state.email} 
          onChangeText={email =>this.setState({ email })}
          placeholder="example@email.com"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}/>
        <TextInput  
          value={this.state.password}
          onChangeText={password =>this.setState({password})}
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          style={styles.input}/>

         
          
          <Text style={styles.errorText}>
            {this.state.error}
          </Text>
         
      </View>
    );
  }
}

const styles =StyleSheet.create({
    container:{
      
    },
    logo:{
        width: 100,
        height:100,
    },
    errorText:{
        color: 'red',
        alignSelf: 'center',
        
      },
      input:{
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 25
    },
})
