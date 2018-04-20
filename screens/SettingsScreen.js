import React, {Component} from 'react';
import { StyleSheet, View,StatusBar,Platform , ScrollView} from 'react-native';
import { Card, Button, Avatar, Text, List, ListItem } from 'react-native-elements';
import Header  from '../components/Header';
import InfoText from '../components/InfoText';
import firebase from 'firebase';

export default class SettingsScreen extends Component {

    constructor(props){
        super(props)
        this.state = {username:'', address:'',editCard:false, dailyGoal:'10000' }
    }
  static navigationOptions = {
    header: null,
  };

  _signOutFirebase= async ()=>{
      try {
        await firebase.auth().signOut();
        this.props.navigation.navigate('Login')
      } catch (e) {
        console.log(e)
      }

  }
  render() {
    return (
        <View>
             <Header headerText={'Profile'}/>
        <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              large
              rounded
              icon={{name:'account-circle'}}
              
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>Display Name</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}>
              User Email
            </Text>
          </View>
          <View>
            <Button small rounded iconRight={{name: 'code'}} title='Sign Out' onPress={()=>this._signOutFirebase()}/>
          </View>
        </View>
        <InfoText text="Account" />
        <List containerStyle={styles.listContainer}>
          <ListItem
            switchButton
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
        
          />
          <ListItem
            title="Daily Goal"
            rightTitle={this.state.dailyGoal}
            onPress={() => this._onPress()}
            containerStyle={styles.listItemContainer}
            
          />
          <ListItem
            title="Address"
            rightTitle="New York"
            containerStyle={styles.listItemContainer}
            
          />
        </List>
        <InfoText text="More" />
        <List containerStyle={styles.listContainer}>
          <ListItem
            title="About US"
            
            containerStyle={styles.listItemContainer}
            
          />
          <ListItem
            title="Terms and Policies"
            
            containerStyle={styles.listItemContainer}
            
          />
          <ListItem
            title="Share our App"
            
            containerStyle={styles.listItemContainer}
            
          />
          <ListItem
            title="Rate Us"
            
            containerStyle={styles.listItemContainer}
            
          />
          <ListItem
            title="Send FeedBack"
            
            containerStyle={styles.listItemContainer}
            
          />
        </List>
      </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    scroll: {
      backgroundColor: 'white',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 6,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 6,
    },
    userImage: {
      marginRight: 12,
    },
    listContainer: {
      marginBottom: 0,
      marginTop: 0,
      borderTopWidth: 0,
    },
    listItemContainer: {
      borderBottomColor: '#ECECEC',
    },
  })
