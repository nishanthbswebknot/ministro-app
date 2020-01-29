import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab,Title ,Left,Right, Thumbnail,Button,Icon ,alert,safe,Item,Input} from 'native-base';
import Agenda from './Agenda';
import Resultados from './Resultados';
import Chat from './Chat';

import { StatusBar,SafeAreaView ,Modal,View,Text,TouchableHighlight,Image} from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchInput, { createFilter } from 'react-native-search-filter';
export default class TabsScrollableExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      modalVisible: false,
      searchTerm: '',
      seachbar:true
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
   render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}}>
      <Container>
      
      
        {this.state.seachbar?<Header style={{backgroundColor:'#075E55'}}><Title style={{color:'white',margin:13}}>Governo Bolsonaro</Title><Right>
            <Button transparent >
            
              <Icon style={{color:'white'}}name="search" />
            </Button>
          </Right></Header>:<Header searchBar rounded style={{backgroundColor:'#075E55'}}>
          <Item style={{flex:1}}>
            <Icon name="ios-search"  />
            <Input placeholder="Type here" />
            
            <Button transparent onPress={()=>this.setState({seachbar:true})}>
          <Icon transparent style={{color:'black'}} name="ios-close" />
          </Button>
          </Item>
          
          
        </Header>}
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
        <Tab heading="CHAT" tabStyle={{backgroundColor:'#075E55'}} activeTabStyle={{backgroundColor:'#075E55'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Chat navigation={this.props.navigation}/>
          </Tab>
          
          <Tab heading="RESULTADOS" tabStyle={{backgroundColor:'#075E55'}} activeTabStyle={{backgroundColor:'#075E55'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Resultados />
          </Tab>
          <Tab heading="AGENDA" tabStyle={{backgroundColor:'#075E55'}} activeTabStyle={{backgroundColor:'#075E55'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Agenda />
          </Tab>

        </Tabs>
      </Container></SafeAreaView>
    );
  }
}