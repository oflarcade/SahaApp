import React, { Component } from 'react';
import {  View, Text, StatusBar, StyleSheet, Image } from 'react-native';
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
                 <Button buttonStyle={{borderRadius:10, backgroundColor:'#feca57'}} onPress={this.onSingUpPress.bind(this)} title='Sign Up' />
             </View>
         }
     }

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Bio Store/ Pedometer </Text>
        <StatusBar hidden showHideTransition="fade" />
        <FormLabel labelStyle={{color:'#FFF'}}>Email :</FormLabel>
        <FormInput containerStyle={{backgroundColor:"rgba(255,255,255,0.2)", borderRadius:10 }} placeholder="email@example.com" placeholderTextColor="rgba(255,255,255,0.7)" underlineColorAndroid="transparent"  autoCorrect={false} inputStyle={{fontWeight:'bold'}} onChangeText={email => this.setState({ email })} />
        <FormLabel labelStyle={{color:'#FFF'}}>Password :</FormLabel>
        <FormInput containerStyle={{backgroundColor:"rgba(255,255,255,0.2)", borderRadius:10 }}  placeholder="Password" placeholderTextColor="rgba(255,255,255,0.7)" underlineColorAndroid="transparent" secureTextEntry onChangeText={password => this.setState({ password })} />
        <FormLabel labelStyle={{color:'#FFF'}}>Address</FormLabel>
        <FormInput containerStyle={{backgroundColor:"rgba(255,255,255,0.2)", borderRadius:10 }}  placeholder="Address" placeholderTextColor="rgba(255,255,255,0.7)" underlineColorAndroid="transparent" onChangeText={address => this.setState({address})}></FormInput>
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
      
      backgroundColor: '#00d2d3',
    },
    logo:{
        alignSelf: 'center',
        width: 100,
        height: 100
    },
    title:{
        color:'#FFF',
        
        marginTop: 1,
        alignSelf: 'center',
        opacity: 0.9,
        fontWeight: 'bold',
    },
    button:{
      borderRadius: 25,
    }
  })
  