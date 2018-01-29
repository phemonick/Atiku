import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import ReferContent from './ReferContent'

export default class Refer extends Component{

    static navigationOptions = {
        title: "ATIKU'S VOTERS APP",
        headerTitleStyle: {  fontWeight: 'normal', fontSize: 24, color: '#fff' },
        headerStyle:{
            backgroundColor:'#187511',
              padding: 10,
              paddingTop: 20,
              paddingBottom: 0,
              height: 70
            
        },
        headerLeft: (
            <TouchableOpacity >
                <Image source = {require('../../logo/icons-02.png')} style={{ height: 20, resizeMode: 'contain'}}  />
            </TouchableOpacity>
            
        )
    }
        

    render(){

        return(
            <View style= {styles.container}> 
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
            <ReferContent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
})