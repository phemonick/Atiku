import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';


export default class Content extends Component {

    signUp(){
        
        const navigate = this.props.navigate
        navigate('Home')
    }

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} > 
                <View style = {styles.topLogo}>
                    
                    <View style = {styles.logoBg} >
                        <Image source = {require('../../logo/icons-24.png')} style={styles.logo} /> 
                    </View>
                </View>
                <Text style = {styles.instruction} > Enter Four Digit Code </Text>
            
                <View style={ styles.bottom  } > 
                    <View style={ styles.code  }> 
                        <CodeInput
                        ref="codeInputRef1"
                        secureTextEntry
                        className={'border-b'}
                        codeLength={6}
                        space={5}
                        cellBorderWidth={3}
                        size={30}
                        inputPosition='left'
                        onFulfill={(code) => this._onFulfill(code)}
                        />
                    </View>
                    <View style = {styles.btn} >
                            <TouchableOpacity onPress = {()=>this.props.navigate('Home')} style ={[styles.signUp, styles.btnContent]}>
                                <Text style= {styles.textC} >Sign Up </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.signUp.bind(this)} style ={[styles.signUp, styles.btnContent]}>
                                <Text style= {styles.textC}> Resend Code </Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'flex-start',
        height: 100+ '%'
    },
    topLogo: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        // backgroundColor: '#fff',
        margin: null
        
    },
    menu: {
        padding: 10,
        paddingTop: 20
    },
    logo: {
        width: 100+'%',
        height: 170,  
        resizeMode: 'contain'    
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        height: 30+ '%',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    instruction: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    code: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20 + '%'
    },
    btn: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row', 
        width: 100+ '%',
        
    },
    btnContent: {
        display: 'flex',
        width: 40+ '%',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#fff'
    },
    textC: {
        color: '#fff',
        fontSize: 15
    },
    signUp: {

    }
})