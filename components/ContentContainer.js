import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';
import CustomImage from './CustomImage';
import { StackNavigator } from 'react-navigation';

export default class ContentContainer extends Component {
  constructor(props){
    super(props)
    this.state = { vegi:false, fruit:false, dairy: false }
  }  
  
    
    _vegitablesButton = () =>{
    
      this.props.navigation.navigate('VegetablesScreen');
      this.setState({vegi : true})
      this.setState({fruit : false})
      this.setState({dairy : false})
      this._Statemng()
    }
    
    _fruitsButton = () => {
      this.props.navigation.navigate('FruitsScreen');
      this.setState({fruit: true});
      this.setState({vegi : false});
      this.setState({dairy : false});
    }

    _DairyButton = () =>{
      this.props.navigation.navigate('DairyScreen');
      this.setState({dairy: true});
      this.setState({vegi : false});
      this.setState({fruit : false});
    }

    _Statemng = () =>{
      let vegis = this.state.vegi;
      return vegis;
    }


  render() {
    this._Statemng();
    console.log(" this is vegi "+this.state.vegi);
    console.log(" this is fruit "+this.state.fruit);
    console.log(" this is dairy "+this.state.dairy);
    console.log('this is vegis state:' + this._Statemng())
    return (
      
      <View style={styles.contentContainer}>
        <View style={styles.vegetable}>
            <CustomImage 
            imageSource ={require('../assets/images/vegetables.jpg')}
            header = 'Vegetables'
            paragraph ='Check out our Vegetables Inventory Here'
            onPress= {()=> this._vegitablesButton()}
           />
    
        </View>

        <View style={styles.fruit}>
        <CustomImage 
            imageSource ={require('../assets/images/fruit.png')}
            header = 'Fruits'
            paragraph = 'Check out our Fruits Inventory Here'
            onPress ={()=>this._fruitsButton()}
            />
        </View>

        <View style={styles.dairy}>
          <CustomImage 
            imageSource= {require('../assets/images/dairy.jpg')}
            header ='Dairy'
            paragraph = 'Check out our Dairies Inventory Here'
            onPress={()=> this._DairyButton()}
           
          />
        </View>
      </View>
    );
  }

  

}




const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 5,
    },
    fruit:{
      flex:1,
      padding: 5
    },
    vegetable :{
      flex: 2,
      padding:5
    },
    dairy:{
      flex: 3,
      padding: 5
    }
})