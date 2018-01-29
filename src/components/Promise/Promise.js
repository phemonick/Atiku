import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Content from './Content'
export default class Promise extends Component{

    static navigationOptions = {
        header: null
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style ={styles.container} >
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
        flex: 1,
    padding: 20,
    backgroundColor: '#388E3C'
    }
})