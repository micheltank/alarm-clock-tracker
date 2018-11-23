/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    position1: 'unknown',
    position2: 'unknown',
    position3: 'unknown',
    position4: 'unknown'
  }

  getCurrentPosition(numberPosition) {
    console.log('getting position')
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const initialPosition = JSON.stringify(position.coords)
        switch (numberPosition) {
          case 1:
            console.log('askljdhsakjdhsaklj')
            this.setState({ position1: initialPosition })
            break;
          case 2:
            this.setState({ position2: initialPosition })
            break;
          case 3:
            this.setState({ position3: initialPosition })
            break;
          case 4:
            this.setState({ position4: initialPosition })
            break;                        
          default:
            break;
        }        
      },
      (error) => alert(error.message),
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Posição 1" onPress={() => this.getCurrentPosition(1)}></Button>
        <Button title="Posição 2" onPress={() => this.getCurrentPosition(2)}>></Button>
        <Button title="Posição 3" onPress={() => this.getCurrentPosition(3)}>></Button>
        <Button title="Posição 4" onPress={() => this.getCurrentPosition(4)}>></Button>
        <Text>Coordenadas:</Text>
        <Text>Posição 1: {this.state.position1}</Text>
        <Text>Posição 2: {this.state.position2}</Text>
        <Text>Posição 3: {this.state.position3}</Text>
        <Text>Posição 4: {this.state.position4}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
