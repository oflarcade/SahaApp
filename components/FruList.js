import React, { Component } from 'react';
import {  View,ScrollView } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';


class  FruList extends Component {

    state ={items: []}

    componentWillMount(){
         axios.get('https://api.jsonbin.io/b/5acd50d54ba8d82b4ccc59b6')
     .then(response => this.setState({items: response.data}));
    
    //fetch('https://api.myjson.com/bins/sr9wf').then(response => response.json().then(data =>this.setState({ fruits: data })));
   
    }
    _renderAlbums(){
       return this.state.items.map(item => <ItemDetail key={item.name} item ={item} />);
        
    }

    
    
    render(){

    return(
        <ScrollView>
            {this._renderAlbums()}
        </ScrollView>
          );
        }
}
export default StoreList;
