import React, { Component } from 'react';
import {  View,ScrollView } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';


class  VegiList extends Component {

    state ={items: []}

    componentWillMount(){
         axios.get('https://api.myjson.com/bins/150fuf')
     .then(response => this.setState({items: response.data}));
    
    //fetch('https://api.myjson.com/bins/sr9wf').then(response => response.json().then(data =>this.setState({ fruits: data })));
    this._renderAlbums();
    }
   
    _renderAlbums(){
       return this.state.items.map(item => <ItemDetail key={item.name} item ={item} />);
        
    }

    
    
    render(){
        console.log(this.state);
    return(
        <ScrollView>
            {this._renderAlbums()}
        </ScrollView>
          );
        }
}
export default StoreList;
