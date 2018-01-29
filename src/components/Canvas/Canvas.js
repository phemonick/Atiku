import React , {Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Canvas from './Home'
export default class  Home extends Component{

    render(){
        return(
            <View style = {styles.container} >
                <TouchableOpacity onPress={()=> this.props.handleMenu()}>
                    <Text> click  </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})