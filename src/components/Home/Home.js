import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import Content from './Content'

export default class Home extends Component{


    static navigationOptions = ({ navigation }) => ({
        title: "ATIKU'S VOTERS APP",
        headerTitleStyle: {  fontWeight: 'normal', fontSize: 24, color: '#fff',fontFamily: 'Roboto' },
        headerStyle:{
            backgroundColor:'#187511',
              padding: 10,
              paddingTop: 20,
              paddingBottom: 0,
              height: 70
            
        },
        headerLeft: (
            <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')} >
                <Image source = {require('../../logo/icons-02.png')} style={{ height: 20, resizeMode: 'contain'}}  />
            </TouchableOpacity>
        )
    })
    openMenu(){
        this.props.navigation.navigate('DrawerOpen');
    }
        

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style= {styles.container}> 
            <StatusBar  backgroundColor="rgba(0,0,0,0)"
                networkActivityIndicatorVisible={false}
                translucent={true}
                barStyle="light-content" />
                <Content navigate={navigate} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
})