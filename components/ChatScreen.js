import React, { Component } from "react";
import { View, Text, Image,KeyboardAvoidingView,SafeAreaView,StatusBar} from "react-native";
import {getBottomSpace} from 'react-native-iphone-x-helper';
import { icons} from 'native-base';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Button,
  Title,
  Icon,
  Row,
  Column
} from "native-base";

import Constants from 'expo-constants';

import { Bubble,InputToolbar,Send,Avatar,GiftedChat } from "react-native-gifted-chat";
import Axios from "axios";



class ChatScreen extends Component {
  
  constructor(props) {
    super(props);
  }
  
  state = {
    messages: [],
    token:null
    

  };

async componentDidMount(){
  
  const clientId = Constants.deviceId;

  const data1 = await Axios.post("http://3.82.200.59:3000/token",{
      device_id:clientId,
    })
     
    this.setState({
      token:data1.data.token
    })
    
}
renderInputToolbar(props) {
  return <InputToolbar {...props} containerStyle={{marginLeft: 15,marginRight: 15,borderRadius: 25,marginBottom:10,
    } }/>;
}
  genUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  renderAvatar = (props) => {
    return (
      <Avatar width="20" height="30" source={require('../assets/robot.png')} />
    )
  }

  onSend = async messages => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages[0]),
    }))
    
    const data = await Axios.post("http://3.82.200.59:3000/ministers/chat/",{
      token:
        this.state.token,
      message: messages[0].text,
      id: 25
    })
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, {text:data.data.ResultText,_id: this.genUuid(),createdAt: new Date(),user: {id:this.genUuid(),avatar:require('../assets/robot.png')}}),
      }))

  };
  

  renderSend(props) {
    return (
      <Send {...props}>
          <Image

            source={require("../assets/send.png")}
            style={{alignItems:"center",alignSelf:"center",height:25,width:25,justifyContent:"center"}}
          />
      </Send>
    );
  }
  
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#A5D076",
            marginBottom:20
           

           
          },
          left: {
            backgroundColor: "#EFEFEF",
            paddingBottom:10,
            marginBottom:20
           
            
          },
          
        }}
      />
    );
  }

  render() {
    
    const name = this.props.navigation.getParam("name", "nothing sent");
    const image=this.props.navigation.getParam("image","nothing sent")
    
    return (
       <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}}>
      <KeyboardAvoidingView

keyboardVerticalOffset={Platform.select({android: 15})} style={{flex:1}}behavior={'padding'} >
      <View style={{ flex: 1 }}>
        <Header
          style={{ backgroundColor: "#075E55", height: 50, width: "100%", }}
        >
          
            <View style={{ flexDirection: "row" }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  style={{ width: 20, height: 20,alignSelf:"center",alignContent:"center",justifyContent:"center" }}
                  source={require("../assets/back.png")}
                />
              </Button>
              <Thumbnail style={{width: 30, height: 30, borderRadius: 30/2,margin:3,alignItems:"center",alignSelf:"center",marginRight:5}} source={{uri:image}}/> 
              
              <Title style={{ color: "white", alignItems:"center",alignSelf:"center"}}> {name}</Title>
            </View>
          <Right></Right>
        </Header>
        
        <GiftedChat
          style={{paddingHorizontal: 20,}}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderBubble={this.renderBubble}
          bottomOffset={getBottomSpace()}
          user={{
            _id: 1
          }}
          
          renderInputToolbar={this.renderInputToolbar}
          renderSend={this.renderSend}
          renderAvatarOnTop={true}
          alwaysShowSend={true}
        />
        
        
      
      </View></KeyboardAvoidingView>
       </SafeAreaView>
    );
  }
}

export default ChatScreen;
