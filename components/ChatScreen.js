import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
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

import { Bubble } from "react-native-gifted-chat";
import Axios from "axios";
import UUIDGenerator from 'react-native-uuid-generator';


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
  console.log(clientId);
  const data1 = await Axios.post("http://3.82.200.59:3000/token",{
      device_id:clientId,
    })
     
    this.setState({
      token:data1.data.token
    })
    //console.log("token",data1.data.token);
}
  genUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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
        messages: GiftedChat.append(previousState.messages, {text:data.data.ResultText,_id: this.genUuid() ,user: {id:this.genUuid()}}),
      }))

  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#A5D076"
          },
          left: {
            backgroundColor: "#EFEFEF"
          }
        }}
      />
    );
  }

  render() {
    
    const name = this.props.navigation.getParam("name", "nothing sent");
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFF" }}>
        <Header
          style={{ backgroundColor: "#075E55", height: 50, width: "100%" }}
        >
          <Left>
            <View style={{ flexDirection: "row" }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../assets/back.png")}
                />
              </Button>
              <Title style={{ color: "white", margin: 6 }}> {name}</Title>
            </View>
          </Left>
        </Header>
        <GiftedChat
          style={{ flex: 8 }}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderBubble={this.renderBubble}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default ChatScreen;
