import React, { Component} from 'react';
import { View,Image} from 'react-native';
import Dash from 'react-native-dash';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
class Agendadata extends Component {
  constructor(props) {
    super(props);
    this.data=props.data
    this.state = {
        
    };
  }

  render() {
    
    return (
      
        <ListItem>
              
      <View style={{flexDirection:'row',padding:20,}}>
      <Image
          style={{width: 15, height: 15,marginRight:10}}
          source={require('../../ministro-mobile-app/assets/clock.png')}/>
          <Text style={{fontSize : 10}}>{this.data.Hour_Scheduled}</Text></View>
          <Dash style={{width:1, height:100, flexDirection:'column',opacity:0.3,marginTop:15}}/>
           <View style={{flexDirection:'column',padding:10,margin:5}}>
          <Text>{this.data.Event}</Text>
          {/* <Text>{this.data.Participants["name"]}</Text> */}
          <Text>Local:{this.data.Local}</Text>
          <View style={{flexDirection:'row',padding:3}}>
          <Image
          style={{width: 15, height: 15,marginRight:8}}
          source={require('../../ministro-mobile-app/assets/calendar.png')}/>
          <Text style={{fontSize : 15}}>Aditinar as mou calendar</Text></View></View>
          
       
        
        
            </ListItem>
    );
  }
}

export default Agendadata;
