import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, } from 'native-base';
import {Image,View} from 'react-native';
import user from '../assets/user.png'
import ResultData from './ResultData'
export default class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      data:null
    };
  }
  async componentDidMount(){
   
    const response = await fetch('http://3.82.200.59:3000/resultados');
      const responseJson = await response.json();
       const result=responseJson["data"];
      this.setState({
        isLoading:false,
        data:result
      })
      console.log(result);
  }
  render() {
    return (
      <Container>
        
        <Content>
         
          
        <List 
         dataArray={this.state.data}
           renderRow={(item)=>{
             return <ResultData data={item}/>
           }}
         />
            
        </Content>
        
      </Container>
    );
  }
}