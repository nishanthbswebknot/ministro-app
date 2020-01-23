import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import user from '../assets/user.png'
import {
  
  TouchableOpacity,
  
  
} from 'react-native'
import ChatScreen from './ChatScreen';
import Data from '../components/Data'
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      data:null
    };
  }
  async componentDidMount(){
   
    const response = await fetch('http://3.82.200.59:3000/ministers');
      const responseJson = await response.json();
       const result=responseJson["data"];
      this.setState({
        isLoading:false,
        data:result
      })
      //console.log(result);
  }


  
  render() {
   
    return (
      <Container>
        
         <Content>
        
         <List 
         dataArray={this.state.data}
           renderRow={(item)=>{
             return <Data navigation={this.props.navigation} data={item}/>
           }}
         />
           
          
         </Content>
       </Container>
    );
  }
}