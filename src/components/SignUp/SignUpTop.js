import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class SignUpTop extends Component {

    render(){

        return(
            <View style = {[styles.container, this.props.style]}>
                <View style = {styles.logoBg} >
                    <Image source = {require('../../logo/icons-24.png')} style={styles.logo} /> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 100+ '%',
        height: 20+'%',
        
        paddingBottom: null,
    //   backgroundColor: '#fff'

    },
    menu: {
       position: 'absolute',
       top: 40,
       left: 20,    
    },
    menuL: {
  
    },
    logoBg: {
        display: 'flex',
        justifyContent: 'center',
        width: 100+ '%',
        height: 85+ '%', 
        alignItems: 'center',
        // marginTop: 10+ '%',
        
    },
    logo: {
        width: 100+'%',
        height: 170,  
        resizeMode: 'contain'    
    },
})