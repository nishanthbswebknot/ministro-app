import React, { Component } from 'react';
import { View, Text,Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button,Title,Icon,Row,Column} from 'native-base';
import { Bubble } from 'react-native-gifted-chat'
class ChatScreen extends Component {
  constructor(props) {
    super(props);
  }
    state = {
        messages: [],
        
      }
  
      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hi',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
      renderBubble (props) {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#A5D076'
              },
              left:{
                backgroundColor: '#EFEFEF'
              }
            }}
          />
        )
      }
    
      render() {
        const name =  this.props.navigation.getParam('name', 'nothing sent')
        return (
            <View style={{flex:1,backgroundColor:'#FFFF'}}>
            <Header style={{backgroundColor:'#075E55',height:50,width:'100%'}}>

            <Left>
            <View style={{flexDirection:'row'}}>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
            
            <Image
          style={{width: 20, height: 20}}
          source={require('../assets/back.png')}/>
            </Button>
            <Title style={{color:'white',margin:6}}> {name}</Title></View>
          
          
            </Left>
          
          
            
            
          
          </Header>
          <GiftedChat style={{flex:8}}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            renderBubble={this.renderBubble}
            user={{
              _id: 1,
            }}
          /></View>
        )
        
      }
      
    }
    

export default ChatScreen;
