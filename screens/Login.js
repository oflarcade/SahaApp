import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import SigninScreen from './SigninScreen';

export default class Login extends Component {
  static navigationOptions = { header: null, };

  constructor(props) {
    super(props)
    this.state = { email: '', password: '', error: '', loading: false }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAuZMFJGR3K_v6vcwG5GUhe-XVzTGFV5JM",
      authDomain: "saha-c74c1.firebaseapp.com",
      databaseURL: "https://saha-c74c1.firebaseio.com",
      projectId: "saha-c74c1",
      storageBucket: "",
      messagingSenderId: "968199024110"
    }
    );
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

  

  renderButtonorLoading() {
    if (this.state.loading) { return <Text> loading </Text> }
    else
      return <View>
        <Button onPress={this.onLoginPress.bind(this)} title='Login'></Button>
      </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden showHideTransition="fade" />
        <FormLabel>email</FormLabel>
        <FormInput onChangeText={email => this.setState({ email })} />
        <FormLabel>password</FormLabel>
        <FormInput onChangeText={password => this.setState({ password })} />
        <Text>{this.state.error}</Text>
        {this.renderButtonorLoading()}
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
