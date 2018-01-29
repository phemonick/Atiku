import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, CheckBox, TextInput } from 'react-native';

export default class ManifestContent extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.topic} > ADD YOUR MANIFEST </Text>
                <View style = {styles.box}> 
                    <View style = {styles.check} >
                        <CheckBox  />
                        <Text> Job Creation </Text>
                    </View>
                    <View style = {styles.check} >
                        <CheckBox  />
                        <Text> Business Financing </Text>
                    </View>
                    <View style = {styles.check} >
                        <CheckBox  />
                        <Text> Others </Text>
                    </View>
                   
                </View>
                <TextInput 
                        multiline = {true}
                        numberOfLines = {8}
                        underlineColorAndroid={'transparent'}
                        style= { styles.input }
        
                        placeholder = { 'Additional information'}
                    />
                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.subT} >Send </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: 20
    },
    topic: {
        fontSize: 20,
        color: '#187511',
        margin: 10
    },
    box:{
        alignSelf: 'baseline'
    },
    check: {
        display: 'flex',
        flexDirection: 'row'
    },
    submit: {
        borderWidth: 3,
        borderRadius: 20,
        width: 50+ '%',
        padding: 10,
        borderColor: '#187511',
        elevation: 1
        
    },
    subT:{
        textAlign: 'center',
        fontSize: 18,
        color: '#95a5a6',
    },
    input: {
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        borderColor: '#95a5a6',
        width: 100+ '%',
        marginBottom: 20,
        marginTop: 20,
        textAlignVertical: 'top',
        padding: 10,
        color: '#BDBDBD'
    }
})