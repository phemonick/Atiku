import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
window.navigator.userAgent = 'react-native'
 const io = require('react-native-socket.io-client/socket.io');
 


export default class ChatTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userId: null
    };
    this.socket = io.connect('http://localhost:3001', {
      transports: ['websocket'],// you need to explicitly tell it to use websockets
      
    })
    this.socket.on('register', ((id)=>{
        console.log(id);
    }))
    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    
    this.socket.on('message', this.onReceivedMessage);
    this.determineUser();
//     setTimeout = BackgroundTimer.setTimeout.bind(BackgroundTimer)
// setInterval = BackgroundTimer.setInterval.bind(BackgroundTimer)
// clearTimeout = BackgroundTimer.clearTimeout.bind(BackgroundTimer)
// clearInterval = BackgroundTimer.clearInterval.bind(BackgroundTimer)
  }

  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  determineUser() {
    AsyncStorage.getItem('@MySuperStore')
      .then((userId) => {
        // If there isn't a stored userId, then fetch one from the server.
        if (!userId) {
          this.socket.emit('userJoined', null);
          this.socket.on('userJoined', (userId) => {
            AsyncStorage.setItem(USER_ID, userId);
            this.setState({ userId });
          });
        } else {
          this.socket.emit('userJoined', userId);
          this.setState({ userId });
        }
      })
      .catch((e) => alert(e));
  }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages=[]) {
    this.socket.emit('message', messages[0]);
    this._storeMessages(messages);
  }

  render() {
    var user = { _id: this.state.userId || -1 };

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={user}
      />
    );
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
}


