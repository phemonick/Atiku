import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { OffCanvas3D } from 'react-native-off-canvas-menu';
import Home from './Canvas'
export default class Canvas extends Component{

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
        return(
            <View style={{flex: 1}}>
                    <OffCanvas3D
                    active={this.state.menuOpen}
                    onMenuPress={this.handleMenu.bind(this)}
                    backgroundColor={'#222222'}
                    menuTextStyles={{color: 'white'}}
                    handleBackPress={true}
                    menuItems={[
                        {
                        title: 'Menu 1',
                        renderScene: <Home handleMenu={this.handleMenu.bind(this)} />
                        
                        },
                        {
                        title: 'Menu 2',
                        
                        
                        }
                    ]}/>
                    <TouchableOpacity style = {{backgroundColor: '#fff', margin: 20}} onPress={()=> this.handleMenu.bind(this)} >
                    <Text > HEllo </Text>
                    
                </TouchableOpacity>
            </View>
        )
    }
}