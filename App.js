/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import SignUp from './src/components/SignUp/SignUp'
import SignIn from './src/components/SignIn/SignIn';
import CodeConfirm from './src/components/CodeConfirm/codeConfirm'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  static navigationOptions = {
    header: null,
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar  backgroundColor="rgba(0,0,0,0)"
        networkActivityIndicatorVisible={false}
        translucent={true}
          barStyle="light-content" />
      <ImageBackground source={require('./src/logo/bg-32.png')} style={styles.bgImg} > 
        <SignUp navigate={navigate}  />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
