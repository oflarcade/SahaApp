import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import SigninScreen from './SigninScreen';
import { Spinner } from 'native-base';


export default class Login extends Component {
  static navigationOptions = { header: null, };

  constructor(props) {
    super(props)
    this.state = { email: '', password: '', error: '', loading: false , loggedIn: false,}
  }
  componentWillMount(){
    
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAuZMFJGR3K_v6vcwG5GUhe-XVzTGFV5JM",
      authDomain: "saha-c74c1.firebaseapp.com",
      databaseURL: "https://saha-c74c1.firebaseio.com",
      projectId: "saha-c74c1",
      storageBucket: "",
      messagingSenderId: "968199024110"
    });
    firebase.auth().onAuthStateChanged((user)=>{
      user ? setTimeout(()=>this.setState({loggedIn: true}),3000) : this.setState({loggedIn: false})
    })
    
  }

  onLoginPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this.props.navigation.navigate('Store')
      })
      .catch(() => {
        this.setState({ error: 'Authentication Failed', loading: false })
      }
      )
  }

  _navigateToStore = () =>{
    this.props.navigation.navigate('Store')
  }
  
  _LoginCheck(){

    switch(this.state.loggedIn){
      case true:
          return (
            <View>
            <Spinner color='#feca57'/>
            {this._navigateToStore()}
            </View>
          )
      case false:
        return (
          <View style={styles.container}>

            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Bio Store/ Pedometer </Text>
            <StatusBar hidden showHideTransition="fade" />
            <FormLabel labelStyle={{ color: '#FFF' }}>Email :</FormLabel>
            <FormInput containerStyle={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10 }} placeholder="email@example.com" placeholderTextColor="rgba(255,255,255,0.7)" underlineColorAndroid="transparent" autoCorrect={false} inputStyle={{ fontWeight: 'bold' }} onChangeText={email => this.setState({ email })} />
            <FormLabel labelStyle={{ color: '#FFF' }}>Password :</FormLabel>
            <FormInput containerStyle={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10 }} placeholder="password" placeholderTextColor="rgba(255,255,255,0.7)" underlineColorAndroid="transparent" secureTextEntry onChangeText={password => this.setState({ password })} />
            <Text>{this.state.error}</Text>
            {this.renderButtonorLoading()}
          </View>
        )
       break;

       default:
       return null;

    }
  }

  renderButtonorLoading() {
    if (this.state.loading) { return <Spinner color='#feca57' />}
    else
      return <View>
        <Button buttonStyle={{borderRadius:10, backgroundColor:'#feca57'}} onPress={this.onLoginPress.bind(this)} title='Login'></Button>
      </View>
  }

  render() {
    return (
      <View style={styles.container}>
        {this._LoginCheck()}
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
