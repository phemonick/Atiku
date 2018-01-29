import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import SignUpForm from './SignUpForm'
import SignUpTop from './SignUpTop'


export default class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            menuOpen : false
        }
        
    }
    handleMenu() {
        const {menuOpen} = this.state
        this.setState({
          menuOpen: !menuOpen
        })
      }

    render(){
        const {navigate} = this.props
        return(
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container} > 
                <SignUpTop style ={ styles.top }/>
                <SignUpForm navigate={navigate}  style ={ styles.bottom } /> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 10,
        paddingTop: 20
        
    },
    top: {
        height: 35+ '%',
        marginBottom: 0,
        
        // backgroundColor: 'yellow'

    },
    contentContainer: {
        paddingVertical: 20,
        justifyContent: 'space-around'
      },
    bottom: {
        height: 65+ '%',
        marginTop: 0
    }
})