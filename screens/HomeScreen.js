import React,{Component} from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Header from '../components/Header';
import Banner from '../components/Banner';
import ContentContainer from '../components/ContentContainer';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    StatusBar.setHidden(true);
  }
  

  render() {
    return (
      <View style={styles.container}>
          <Header headerText={'Saha Store'}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Banner />
          <ContentContainer navigation={this.props.navigation}/>
        </ScrollView>
        
      </View>
    );
  }

  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    
  }
});
