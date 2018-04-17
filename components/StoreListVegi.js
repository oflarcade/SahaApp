import React, { Component } from 'react';
import {  View,ScrollView, ActivityIndicator,StyleSheet } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import ContentContainer from './ContentContainer';

class  StoreListVegi extends Component {
    constructor(props){
        super(props)
        fruits =  new ContentContainer().state.vegi;
    }
    state ={items: [], loaded:false}

    
    componentWillMount(){
         axios.get('https://api.myjson.com/bins/150fuf')
     .then(response => this.setState({items: response.data}))
     .then(this.setState({loaded:true}))
    }
   
    _renderAlbums(){
        if(!this.state.loaded){
            return <ActivityIndicator style={styles.loaderS}  size='large' color='#OOO'/>;
        }
        else
            {
                return this.state.items.map(item => <ItemDetail key={item.name} item ={item} />);
            }
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
export default StoreListVegi;
