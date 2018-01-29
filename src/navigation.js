import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import React, { Component} from 'react';
import {Dimensions} from 'react-native'

import App from '../App'
import CodeConfirm from './components/CodeConfirm/codeConfirm';
import SignIn from './components/SignIn/SignIn'
import Rate from './components/Rate/Rate'
import Manifest from './components/Manifest/Manifirst'
import National from './components/National/National'
import Refer from './components/Refer/Refer'
import Opportunity from './components/Opportunity/Opportunity'
import GetPvc from './components/GetPvc/GetPvc'
import Home from './components/Home/Home'
import VotersGuide from './components/VotersGuide/VotersGuide'
import Canvas from './components/Canvas/Home'
import Promise from './components/Promise/Promise';
import Menu from './Menu'


const { width, height } = Dimensions.get('screen');

const myDrawer = DrawerNavigator({
    Home:  { 
        screen: App,
        // navigationOptions: {
        //     header: null
        // }
    },
    
},
{
    contentComponent: props => <Menu {...props} />,
    drawerBackgroundColor: '#43A047',
    drawerWidth: Math.min(height, width) * 0.5
    // CustomDrawerContentComponent
})

const RootNavigation = StackNavigator({
    Home: {
        screen: App,
        
    },
    Main:{
    screen: Home
    },
    Rate: {
        screen: Rate,
    },
    SignIn: {
        screen: SignIn
    },
    CodeConfirm: {
        screen: CodeConfirm
    },
    Manifest: {
        screen: Manifest
    },
    National: {
        screen: National
    },
    Refer: {
        screen: Refer
    }, 
    Opportunity: {
        screen: Opportunity
    },
    GetPvc: {
        screen: GetPvc
    },
    VotersGuide:{
        screen: VotersGuide
    },
    Promise: {
        screen: Promise
    },
})

export default RootNavigation;