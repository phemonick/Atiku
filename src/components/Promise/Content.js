import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Content extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <TouchableOpacity>
                        <Image source = {require('../../logo/icons-03.png')} />
                    </TouchableOpacity>
                    <Text style = {styles.topH} > VOTERS GUIDE </Text>
                    <TouchableOpacity>
                        <Text style = {styles.cont}> SKIP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20
        // alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topH: {
        color: '#fff',
        fontSize: 20
    },
    cont: {
        textAlign: 'left',
        color: '#fff'
    }
})