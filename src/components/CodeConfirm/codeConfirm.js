import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import Content from './content'
export default class CodeConfirm extends Component {

  static navigationOptions = {
   header: null
        
    }

    render(){
      const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
      <StatusBar  backgroundColor="rgba(0,0,0,0)"
      networkActivityIndicatorVisible={false}
      translucent={true}
        barStyle="light-content" />
      <ImageBackground source={require('../../logo/bg-32.png')} style={styles.bgImg} > 
        <Content navigate={navigate}/>
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
})