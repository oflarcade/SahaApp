import React, { Component } from 'react';
import {  View,ScrollView, ActivityIndicator,StyleSheet } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import ContentContainer from './ContentContainer';

class  StoreList extends Component {
    constructor(props){
        super(props)
        fruits =  new ContentContainer().state.vegi;
    }
    state ={items: [], loading:false}

    
    componentWillMount(){
         axios.get('https://api.jsonbin.io/b/5acd50d54ba8d82b4ccc59b6')
     .then(response => this.setState({items: response.data}));
    }
   
    _renderAlbums(){
        if(!this.state.items){
            return <ActivityIndicator style={styles.loaderS}  size='large' color='#OOO'/>;
        }
        else

       return this.state.items.map(item => <ItemDetail key={item.name} item ={item} />);
    }

   
    
    render(){
        console.log('this is the state from contentcontainer vegi : ' + fruits )
    return(
        <ScrollView>
            {this._renderAlbums()}
        </ScrollView>
          );
        }
}


const styles = StyleSheet.create({
        loaderS:{
            flex: 1,
            justifyContent: 'center',
        }
})
export default StoreList;
