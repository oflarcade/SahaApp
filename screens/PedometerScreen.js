import Expo from "expo";
import React ,{Component} from 'react';
import { Pedometer } from "expo";
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import AnimatedBar from 'react-native-animated-bar';
export default class PedometerScreen extends Component {
  static navigationOptions = {  header: null,}

  state = {isPedometerAvailable: "checking", pastStepCount: 0, currentStepCount: 0 , dailyGoal: 10000, fill: 0, progress: 0 }

  componentDidMount() { 
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 0.01,
        };
      });
    }, 1000);
  
    this._subscribe(); StatusBar.setHidden(true); }

  componentWillUnmount() {this._subscribe(); }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

              
  render() {
   
    return (
      
        <View style={styles.container}>  
          <Text style={styles.points}> Walk Or Run !</Text>
          <Text style={styles.points}> Yesterday Stpes : {this.state.pastStepCount}</Text>
          <Text style={styles.points}> Today Steps: {this.state.currentStepCount} </Text>
         {/*  <Text>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
          <Text>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text> */}
          {/* <AnimatedCircularProgress 
          size={200}
          width={3}
          fill={this.state.pastStepCount}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text style={styles.points}>
                {this.state.pastStepCount}
              </Text>
            )
          }

          </AnimatedCircularProgress> */}
          <AnimatedBar
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={0}
            animate={true}
          />

        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#81ecec'
  },
  points:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  }
});

Expo.registerRootComponent(PedometerScreen);

