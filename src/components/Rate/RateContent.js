import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';
// import StarRating from 'react-native-star-rating';

export default class RateContent extends Component{

    constructor(){
        super()
        this.state = {
            language:''
        }
    }
    render(){
        return(
            <View style= {styles.container}> 
                <Text style={styles.info} > Rate Atiku </Text>
                <Image style={{height: 40+'%'}} source={require('../../logo/atiku.jpg')} />
                <View style = {styles.pvc} > 
                    <Picker 
                        selectedValue={this.state.language}
                        mode='dropdown'
                        prompt='Do you own a PVC'
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item color='#95a5a6' label="Do you own a PVC" value= '1' />
                        <Picker.Item label="Yes" value="java" />
                        <Picker.Item label="No" value="js" />
                    </Picker>
                </View>
                <Text style = {styles.ratebtm} > Rate Atiku </Text>
                <View> 
                

                </View>
                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.subT} >Submit </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 100+'%',
        padding: 20
    },
    info: {
        fontSize: 20,
        color: '#187511',
        marginBottom: 20
    },
    pvc: {
        marginTop: 20,
        width: 100+ '%',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: "#95a5a6",
        borderTopColor: '#95a5a6',
        borderTopWidth: 2,
        marginBottom: 20,
    },
    ratebtm: {
        fontSize: 18,
    },
    submit: {
        borderWidth: 3,
        borderRadius: 20,
        width: 50+ '%',
        padding: 10,
        borderColor: '#187511'
        
    },
    subT:{
        textAlign: 'center',
        fontSize: 18,
        color: '#95a5a6',
    }
})