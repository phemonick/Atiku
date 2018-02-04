import React, { Component } from 'react';
import {View, StyleSheet, AsyncStorage, Image} from 'react-native';

export default class Splash extends Component {

    constructor(props){
        super(props);
        this.state={
            component: ''
        }
    }
    componentWillMount(){
        console.log('started')
        this.checkToken();
    }

   async checkToken(){
    
        try {
            
            const value = await AsyncStorage.getItem('#1TRU3')
            const response = await value
            console.log(response+"in check token")
            if (value !== null){
                // We have data!!
                console.log(value);
                this.setState({
                    component: 'Main'
                })
              }
              // We have data!!
            //   this.props.navigation.navigate('SignIn')
            
            else{
                console.log('no token yet')
                this.setState({
                    component: 'App'
                })
            }
          } catch (error) {
              console.log(error)
            // Error retrieving data
          }
    }

    componentDidMount(){
        this.checkToken();
        const { navigation } = this.props;
        setTimeout(()=>{
            // Add your logic for the transition
            console.log(this.state.component)
            navigation.navigate(this.state.component)
       }, 4000)
        
    }

    render(){
        const { stores } = this.props
        return(
            <View style = {styles.container} >
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
         width: 100+ '%',
        height: 100+ '%'
    },
    img: {
        flex: 1,
        width: null,
        height: null
    }
})