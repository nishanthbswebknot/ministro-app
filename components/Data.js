import React, { Component } from 'react';
import { View, } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import {
  
    TouchableOpacity,
    
    
  } from 'react-native'
class Data extends Component {
  constructor(props) {
    super(props);
    this.data=props.data;
    this.state = {
    };
  }

  render() {
    return (
        
            <ListItem avatar>
              <Left>
               <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={{uri:this.data.Image} }/> 
              </Left>
              <TouchableOpacity
                    title="Go to profile screen"
                    
                    onPress={() =>
                      this.props.navigation.navigate("ChatScreen",{ 
           name: this.data.Name 
         } )}
                >
              <Body>
                <Text>{this.data.Name}</Text>
                <Text note>{this.data.Description}</Text>
              </Body></TouchableOpacity>
              <Right>
              
              </Right>
            </ListItem>
          
            
          
    );
  }
}

export default Data;
