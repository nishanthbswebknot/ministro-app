import React, { Component } from 'react';
import { View,Text, } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,  Button } from 'native-base';
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
            <TouchableOpacity
                    title="Go to profile screen"
                    style={{flexDirection:"row"}}
                    onPress={() =>
                      this.props.navigation.navigate("ChatScreen",{ 
           name: this.data.Name,image:this.data.Image
         })}
                >
              <Left>
               <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={{uri:this.data.Image} }/> 
              </Left>
              
              <Body>
                <Text>{this.data.Name}</Text>
                <Text note>{this.data.Description}</Text>
              </Body></TouchableOpacity>
              
            </ListItem>
          
            
          
    );
  }
}

export default Data;
