import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, TextInput, Keyboard } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
// import {OffCanvas3D} from 'react-native-off-canvas-menu'

export default class SignIn extends Component{
    
    static navigationOptions = {
       header: null
    }

    render(){
        return(
            <ImageBackground source={require('../../logo/bg-32.png')} style={styles.bgImg} > 
                <View style = {styles.container}> 
                    <View style = {styles.logoBg}>
                        <Image source = {require('../../logo/icons-24.png')} style={styles.logo} /> 
                    </View>
                    <View>
                            <TextInput 
                                style={styles.input}
                                fontFamily= 'Roboto'
                                placeholderTextColor= {'#fff'}
                                underlineColorAndroid={'#fff'}
                                keyboardType = 'numeric'
                                // onChangeText={(text) => this.setState({userId: text})}
                                onSubmitEditing={Keyboard.dismiss}
                                placeholder={'Phone Number'}
                                maxLength={12}
                            />
                      
                            <TouchableOpacity style = {styles.btn}>
                                <Text style = {styles.btnTxt}> Sign In </Text>
                            </TouchableOpacity>
                        
                        
                    </View>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 100+ '%',
        justifyContent:'space-around',
        padding: 20
    },
    logoBg: {
        alignSelf:'baseline',
        display: 'flex',
        justifyContent: 'center',
        width: 100+ '%',
        height: 30+ '%', 
        alignItems: 'center',
        marginTop: 10+ '%',
        // backgroundColor: '#ffffff'
        
    },
    logo: {
        width: 100+'%',
        height: 170,  
        resizeMode: 'contain'    
    },
    phoneTxt: {
        
    },
    input: {
        width: 250,
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        height: 50,
        fontSize: 18,
        borderBottomColor:'#fff',
        width:100+ '%',
        // borderWidth: 1,
        // borderRadius: 4,
        alignSelf: 'center',
        // backgroundColor: '#ffffff'
      },
    bgImg: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
      },
    getIn: {
        display: 'flex',
        flexDirection: 'row',
        width: 100+ '%'
    },
    sign: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35+ '%',
          height: 50,
          borderWidth: 3,
          borderRadius: 24,
          borderColor: '#fff',
          marginRight: 10,
    },
    getInTxt: {
        color: '#fff',
        fontSize: 18
    },
    btn: {
        backgroundColor: '#2ecc71',
        elevation: 5,

        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 20
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20
    }
})