import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default class Content extends Component{

    render(){
        return(
            <View style = {styles.container} > 
                <View style = {styles.upload} >
                    <Image style = {styles.img} source = {require('../../logo/icons-06.png')} />
                </View>
                <Text style = {styles.txt}> Welcome John Doe </Text>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.content} >
                        <TouchableOpacity onPress={()=> this.props.navigate('VotersGuide')} style= {[styles.imgContainer, styles.imgColor]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-10.png')} />
                            <Text style = {styles.voteInst} > Voters Guide </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Promise')} style= {[styles.imgContainer, styles.imgColorB]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-15.png')} />
                            <Text style = {styles.voteInst} > The promise </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Manifest')} style= {[styles.imgContainer, styles.imgColorB]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-16.png')} />
                            <Text style = {styles.voteInst} > Add your Manifest </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('National')} style= {[styles.imgContainer, styles.imgColor]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-17.png')} />
                            <Text style = {styles.voteInst} > National Issues </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigate('Chat')}  style= {[styles.imgContainer, styles.imgColor]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-18.png')} />
                            <Text style = {styles.voteInst} > Chat with Atiku </Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={()=> this.props.navigate('Rate')} style= {[styles.imgContainer, styles.imgColorB]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-19.png')} />
                            <Text style = {styles.voteInst} > Rate Atiku  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Opportunity')} style= {[styles.imgContainer, styles.imgColorB]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-20.png')} />
                            <Text style = {styles.voteInst} > Opportunity Center </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('GetPvc')}  style= {[styles.imgContainer, styles.imgColor]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-21.png')} />
                            <Text style = {styles.voteInst} > Getting Your PVC </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Refer')} style= {[styles.imgContainer, styles.imgColor]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-25.png')} />
                            <Text style = {styles.voteInst} >Join the Atiku Campaign</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Refer')} style= {[styles.imgContainer, styles.imgColorB]} >
                            <Image style = {styles.img} source = {require('../../logo/icons-09.png')} />
                            
                            <Text style = {styles.voteInst} >Refer a friend and get instant Card</Text>
                            
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 30
    },
    upload: {
        width: 30+ '%',
        height: 15+ '%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 50
    },
    txt: {
        fontSize: 18
    },
    contentContainer: {
        paddingVertical: 20,
        

      },
      content:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100+ '%',
       

      },
      imgContainer: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        
        padding: 10,
        width: 45+ '%',
        margin: 2
        

      },
      imgColor: {
        backgroundColor: '#E0E0E0',
      },
      imgColorB: {
        backgroundColor: '#BDBDBD',
      },
      img: {
        resizeMode: 'contain',
        
      },
      voteInst: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 15
      }
})