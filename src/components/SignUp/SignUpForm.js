import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Picker, Keyboard, Button, TouchableOpacity, Text, TouchableNativeFeedback } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class SignUpForm extends Component{

    constructor(){
        super();
        this.state = {
            gender: '',
            residence: '',
            userId: ''
        }
    }
    signIn(){
        this.props.navigate('SignIn')
    }
    verify(){
        
        this.props.navigate('CodeConfirm')
    } 

    _buttonStyle() {
        return {
          backgroundColor: '#2ecc71',
          underlayColor: '#51437f',
          borderColor: '#6E5BAA',
          disabledColor: '#ababab',
          textColor: '#ffffff'
        }
      }

    render(){
        const {navigate} = this.props
        return(
           
            <View style = {[styles.container, this.props.bottom]}>
                <View style = {styles.form}>
                    <View style={styles.topButton} > 
                        <TouchableOpacity onPress={()=> this.props.navigate('Opportunity') } style={[styles.getIn, styles.up, styles.signUpBtn]}>
                            <Text style={[styles.upText]} > Sign Up </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigate('Main')} style={[styles.getIn, styles.signUpBtn]} >
                            <Text style={styles.getInText}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor= {'#fff'}
                        fontFamily= 'Roboto'
                        // onChangeText={(text) => this.setState({userId: text})}
                        onSubmitEditing={Keyboard.dismiss}
                        underlineColorAndroid={'#fff'}
                        placeholder={'Name'}
                        maxLength={12}
                        multiline={false}
                    />
                    
                    <TextInput
                        style={styles.input}
                        fontFamily= 'Roboto'
                        placeholderTextColor= {'#fff'}
                        underlineColorAndroid={'#fff'}
                        keyboardType = 'numeric'
                        
                        // onChangeText={(text) => this.setState({userId: text})}
                        onSubmitEditing={Keyboard.dismiss}
                        placeholder={'Phone Number'}
                        maxLength={12}
                        // multiline={false}
                    />
                    <TextInput
                        style={styles.input}
                    
                        placeholderTextColor= {'#fff'}
                        // onChangeText={(text) => this.setState({userId: text})}
                        onSubmitEditing={Keyboard.dismiss}
                        fontFamily= 'Roboto'
                        keyboardType = 'email-address'
                        placeholder={'Email'}
                        underlineColorAndroid={'#fff'}
                        maxLength={12}
                        multiline={false}
                    />
                    <View style={[styles.gender]} >
                        <Picker 
                            selectedValue={this.state.gender} 
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                            <Picker.Item  color='#fff' label="Gender" value="Gender" />
                            <Picker.Item color='#fff' label="Female" value="Male" />
                            <Picker.Item color='#fff' label="Female" value="Female" />
                        </Picker>
                    </View>
                    <View style={[styles.rowPick]}>
                    <View style={[styles.local]} >
                        <Picker 
                            selectedValue={this.state.residence}
                            style={styles.pick}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => this.setState({residence: itemValue})}>
                            <Picker.Item color='#fff' label="urban" value="urban" />
                            <Picker.Item color='#fff' label="rural" value="rural" />
                            {/* {data.map ((value)=><Picker.Item label={value} value={value} key={value}/>)} */}
                        </Picker>
                    </View>
                    <View style={[styles.local]} >
                        <Picker 
                            selectedValue={this.state.residence}
                            style={styles.pick}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => this.setState({residence: itemValue})}>
                            <Picker.Item color='#fff' label="state" value="state" />
                            <Picker.Item color='#fff' label="abuja" value="abuja" />
                            <Picker.Item color='#fff' label="edo" value="edo" />
                            {/* {data.map ((value)=><Picker.Item label={value} value={value} key={value}/>)} */}
                        </Picker>
                    </View>
                    </View>
                    <DatePicker
                        style={styles.dob}
                        date={this.state.date}
                        mode="date"
                        placeholder="Date of Birth"
                        format="YYYY-MM-DD"
                        minDate="1950-05-01"
                        maxDate="2000-01-01"
                        androidMode="spinner"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            placeholderText: {
                                color: '#fff',
                                fontSize: 18,
                                alignSelf:'flex-start',
                                paddingLeft:10
                            },
                        dateInput: {
                            // marginLeft: 36,
                            borderWidth: null,
                            borderBottomWidth: 1,
                            borderColor: '#fff'
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    <TouchableOpacity onPress={()=> this.props.navigate('CodeConfirm')} style={styles.verifyBtn}>
                    <Text style = {styles.bottomBtn} > Verify Phone Number </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.signIn.bind(this)} >
                        <Text style = {styles.signIn} > already have an account? SIGN IN </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        // backgroundColor: '#009444',
        width: 100+ '%',
        height: 65+ '%',
        marginBottom: 20,
        paddingTop: 0,
        
    },
    form: {
        height: 80+ '%',
        marginBottom: 10,
    },
    input: {
        width: 250,
        color: '#fff',
        padding: 10,
        height: 50,
        fontSize: 18,
        borderBottomColor:'#fff',
        width:100+ '%',
        // borderWidth: 1,
        // borderRadius: 4,
        alignSelf: 'center',
        // backgroundColor: '#ffffff'
      },
      rowPick: {
        display: 'flex',
        flexDirection: 'row',
        width: 100+ '%',
        alignItems: 'center',
        // backgroundColor: '#fff',
        paddingLeft: 10,
      },
      pick: {
        padding: 10
      },
      local: {
        borderBottomWidth: 1,
        width: 50+ '%',
        borderBottomColor: "#fff"
      },
      gender: {
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: "#fff"
      },
      pick:{
        color: '#fff',
        borderWidth:3,
        borderBottomColor: "#fff"
      },
      topButton: {
          display: 'flex', 
          flexDirection: 'row',
          alignSelf: 'center',
          
          justifyContent: 'space-between',
          
      },
      up: {
        backgroundColor: '#fff',
      },
      getIn: {
          width: 45+ '%',
          height: 50,
          borderWidth: 3,
          
          borderRadius: 24,
          borderColor: '#fff',
          marginRight: 10,
          
      },
      getInText: {
        color: "#fff",
        fontSize:20,
        fontFamily: 'Roboto',
      },
      upText: {
        color: "#2ecc71",
        fontFamily: 'Roboto',
        fontSize:20
      },
      signUpBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      verifyBtn: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          borderRadius: 5,
        backgroundColor: '#2ecc71',
        marginTop: 10,
        padding: 10
      },
      bottomBtn: {
          color: '#fff',
          fontSize: 18
      },
      dob: {
          width: 100+ '%',
          
     },
     signIn: {
         textAlign: 'center',
         padding: 10,
         color: '#fff'
     }
      
})