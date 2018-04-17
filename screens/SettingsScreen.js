import React, {Component} from 'react';
import { StyleSheet, View,StatusBar,Platform} from 'react-native';
import { Card, Button, Avatar, Text } from 'react-native-elements';
import firebase from 'firebase';

export default class SettingsScreen extends Component {

    constructor(props){
        super(props)
        this.state = {username:'', address:'',editCard:false}
    }
  static navigationOptions = {
    header: null,
  };
    
  componentWillMount(){
        this.setState({ username:firebase.auth().currentUser.email});
  }
 
  
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View>
            <Card title='Profile' wrapperStyle={{ justifyContent: 'center',}}>
                <Avatar 
                large
                rounded
                icon={{name: 'account-circle',}}
                overlayContainerStyle={{backgroundColor: 'green'}}
                style={{alignSelf: 'center',justifyContent: 'center',}}
                />
                <Text style={{ marginBottom: 10,alignSelf:'center'}}>
                    {this.state.username}
                </Text>
                <Button
                    icon={{ name: 'code' }}
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Edit Profile' />
            </Card>

            
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#FFF',
  },
  image:{
      width:75,
      height: 75,
      borderRadius: 37.5,
  },
  text:{
      padding: 15,
  },
  androidHeader: {
    ...Platform.select({
        android: {
            backgroundColor: 'white'
        }
    })
},
androidHeaderTitle: {
    ...Platform.select({
        android: {
            alignItems: 'flex-end',
            paddingRight: 40,
        }
    })

},
headerContent:{
  flexDirection: 'row',
  
}
})
