import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Fab, Icon } from 'native-base'

export default class Refer extends Component{

    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    render(){

        return(
            <View style={styles.container} > 
                <Text style= {styles.info} > REFER A FRIEND </Text>
                
                <View> 
                    <Text style = {styles.text}> Your Referal Link </Text>
                    <TouchableOpacity style= {styles.link} >
                        <Text style= {styles.linkT}> http:goo.gl/Oluwa </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.copy} >
                        <Text style={styles.copyT}> copy Link </Text>
                    </TouchableOpacity>
                </View>
                <View> 
                    <Image source = {require('../../logo/icons-24.png')} style={styles.logo} /> 
                    <Text style = {styles.text} > Share with friends </Text>
                    <View style={styles.social}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#27ae60' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                        </Button>
                    </Fab>
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
        justifyContent: 'space-between',
        height: 100+ '%',
        padding: 20
    },
    info: {
        fontSize: 24,
        color: '#27ae60'
    },
    social: {
        
    },
    link: {
        borderBottomWidth: 1,
        borderBottomColor: '#2ecc71'
    },
    linkT: {
        color: '#2ecc71'
    },
    copy: {
        margin: 10,
        backgroundColor: '#7f8c8d'
    },
    copyT: {
        color: '#fff',
        textAlign: 'center',
        padding: 5
    },
    logo: {
        
        height: 170,  
        resizeMode: 'contain'    
    },
    text: {
        fontSize: 18,
        color: '#bdc3c7',
        textAlign: 'center'
    }
})