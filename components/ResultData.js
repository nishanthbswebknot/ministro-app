import React, { Component } from 'react';
import { View,Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button,  } from 'native-base';
class ResultData extends Component {
    constructor(props) {
        super(props);
        this.data=props.data;
        this.state = {
          
        };
      }

  render() {
    return (
        <View>
        <ListItem avatar>
        <Left>
         <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={{uri:this.data.avatar} }/> 
        </Left>
        
        <Body>
          <Text>{this.data.Title}</Text>
          <Text note>{this.data.Description}</Text>
        </Body>
        <Right>
        
        </Right>
      </ListItem>
      <Image
          style={{width: '100%', height:200}}
          source={{uri: this.data.Image}}
        />
      </View>

    );
  }
}

export default ResultData;
