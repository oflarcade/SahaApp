import React, { Component } from 'react';
import {  View, Text, StatusBar, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput,FormValidationMessage, Button} from 'react-native-elements';

export default class SigninScreen extends Component {
     static navigationOptions ={header: null};
     
     constructor(props){
         super(props)
         this.state = {email: '', password:'',address:'', error:'', loading:false}
     }

     onSingUpPress(){
         this.setState({error:'', loading:true});
         const{email,password}= this.state;
         firebase.auth().createUserWithEmailAndPassword(email,password)
         .then(()=>{
             this.setState({error:'', loading:false});
             this.props.navigation.navigate('Login');
         })
         .catch(()=>{
             this.setState({error:'authentication Failed !', loading:false})
         })
     }

     renderButtonOrLoading(){
         if(this.state.loading)  
         {return <Text> loading</Text> }
         else{
            return <View>
                 <Button onPress={this.onSingUpPress.bind(this)} title='Sign Up' />
             </View>
         }
     }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden showHideTransition="fade" />
      <FormLabel>email</FormLabel>
      <FormInput onChangeText={email =>this.setState({email})} ></FormInput> 
      <FormLabel>password</FormLabel>
      <FormInput onChangeText={password => this.setState({password})}></FormInput>
      <FormLabel>Address</FormLabel>
      <FormInput onChangeText={address => this.setState({address})}></FormInput>
      <Text>{this.state.error}</Text>
      {this.renderButtonOrLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
      backgroundColor: '#feca57',
    }
  })
  