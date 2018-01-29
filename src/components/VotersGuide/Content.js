import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base'
import {data} from './data'
const cards = [
    {
      text: 'Card One',
      name: 'One',
    }
  ];

export default class Content extends Component{
    
    render(){

        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <TouchableOpacity>
                        <Image source = {require('../../logo/icons-03.png')} />
                    </TouchableOpacity>
                    <Text style = {styles.topH} > VOTERS GUIDE </Text>
                    <TouchableOpacity>
                        <Text style = {styles.cont}> SKIP </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={data}
                        renderEmpty={() =>
                        <View style={{ alignSelf: "center" }}>
                            <Text>Over</Text>
                        </View>
                        }
                        renderItem={item =>
                        <View style={styles.deck}> 
                            <Text style = {[styles.topic, styles.step]}> {item.step} </Text>
                               {item.img}
                            <Text style = {[styles.topic, styles.top]}>{item.topic} </Text>
                            <Text style={styles.cont}>{item.content} </Text>

                        </View>
                        }
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topH: {
        color: '#fff',
        fontSize: 20
    },
    deck: {
        display: 'flex',
        width: 100+ '%',
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20+ '%'

    },
    step: {
        marginBottom: 20,
        
    },
    top: {
        marginTop: 20
    },
    topic: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'

    },
    cont: {
        textAlign: 'left',
        color: '#fff'
    }
})