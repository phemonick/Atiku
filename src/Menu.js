import React, {Component} from 'react'
import { View, Text } from 'react-native';

export default class Menu extends Component{

    static navigationOptions = {
        headerMode: 'none'
        
      };
    
    
    render(){
        return(
            <View>
                <Text> Hello am the drawer navigation </Text>
            </View>
        )
    }
}

