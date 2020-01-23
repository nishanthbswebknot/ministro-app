import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab,Title ,Left,Right, Thumbnail,Button,Icon ,alert} from 'native-base';
import Agenda from './Agenda';
import Resultados from './Resultados';
import Chat from './Chat';
import { StatusBar } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class TabsScrollableExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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
      <Container>
      <StatusBar hidden={true} />


        <Header style={{backgroundColor:'#075E55'}}><Title style={{color:'white',margin:13}}>Governo Bolsonaro</Title><Right>
            <Button transparent onPress={()=>{}}>
            
              <Icon style={{color:'white'}}name="search" />
            </Button>
          </Right></Header>
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
      </Container>
    );
  }
}