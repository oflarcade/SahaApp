import React, { Component } from 'react';
import {  View,StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';

//set the items for the ActionSheet
const 
const options = ['Cancel',100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000]

export default class DailyGoal extends Component {
    constructor(props){
        super(props)
        this.state={
            yourDailyGoal : 0,
        }
    }

    _ShowActionSheet= () => {
        this.ActionSheet.show()
    }
    _handleButton(buttonIndex){
        this.setState({yourDailyGoal: buttonIndex})
    }
    render() {
    return (
    <View>
      <View style={styles.container}>
        <Text onPress={this._ShowActionSheet}> What is your Target Goal ? </Text>
        <ActionSheet 
        ref={ o=>{this.ActionSheet = o}}
        title={<Text style={{color: '#000', fontSize: 18}}>Select Your Goal?</Text>}
        options={options}
        cancelButtonIndex={0}
        destructiveButtonIndex={20}
        onPress={this.handlePress}
        />
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    }
})
