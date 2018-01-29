import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';


export default class Content extends Component{
    constructor(){
        super()
        this.state = {
            pvc: ''
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.info} > Getting Your Pvc </Text>
                <View style = {styles.content}> 
                    <View style = {styles.top}> 
                        <View style = {styles.pickJ} >
                        
                            <Image style = {styles.Jimg1} source = {require('../../logo/icons-11.png')} />
                            
                            <View style = {styles.jImg}>
                                <Picker
                                    mode={'dropdown'}
                                    selectedValue={this.state.pvc}
                                    onValueChange={(itemValue, itemIndex) => this.setState({pvc: itemValue})}>
                                    <Picker.Item  label="Do You Have a PVC?" value="java" />
                                    <Picker.Item label="yes" value="java" />
                                    <Picker.Item label="No" value="js" />
                                </Picker>
                            </View>
                        </View>
                        <View style = {styles.partb} > 
                                <View style = {styles.cv}> 
                                    <Text style = {styles.cvT} > Upload Proof [optional]</Text>
                                </View>
                            
                            <View style={styles.file} >
                                <Text> File :</Text>
                                <TouchableOpacity style = {styles.chooseF} >
                                    <Text> Choose File  </Text>
                                </TouchableOpacity>
                                <Text> No file chosen </Text>
                            </View>
                            <TouchableOpacity style={styles.submitCv}>
                                <Text style={styles.submitCvT}> Upload Proof </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {styles.bottom} >

                        <View style = {styles.bottomA}>
                            <Image style = {styles.Jimg1} source = {require('../../logo/icons-12.png')} />
                            <TouchableOpacity bottomRow>
                                <Text style={styles.text} > You don't have a PVC?</Text>
                                <Text style={styles.textb}> See list of Registration </Text>
                                <Text style={styles.textb}> Centers </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
    info: {
        fontSize: 24,
        color: '#27ae60',
        marginBottom: 10
        
    },
    content:{
        height: 80+ '%',
        width: 100+ '%'

    },
    top: {
        backgroundColor: '#ecf0f1',
         height: 60+ '%',
        width: 100+ '%'
    },
        pickJ: {
            display: 'flex',
            flexDirection: 'row',
            height: 30+ '%',
            
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#fff'

        },
        partb: {
            display: 'flex',
            alignItems: 'center',
            height: 70+ '%',
            justifyContent: 'center'
        },
        Jimg1: {
        resizeMode: 'contain',
        height: 60
        },
        jImg: {
            // backgroundColor: '#fff',
            width: 60+ '%'
        },
        cv: {
            display: 'flex',
            alignItems: 'center'
        },
        cvT: {
            textAlign: 'center',
            fontSize: 18
        },
        file: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10


        },
        chooseF: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#C8E6C9',
            padding: 5,
            marginRight: 10,
            marginLeft: 10
        },
        submitCv: {
            margin: 10,
            backgroundColor: '#20bf6b',
            width: 90+'%',
            borderRadius: 10
        },
        submitCvT: {
            textAlign: 'center',
            fontSize: 18,
            padding: 15
        },
    bottom: {
        marginTop: 20,
        backgroundColor: '#ecf0f1',
        display: 'flex',
        
        
    },
    bottomA: {
        flexDirection: 'row',
        alignItems: 'center',
        
        
        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textb: {
        fontSize: 18,

    },
})
