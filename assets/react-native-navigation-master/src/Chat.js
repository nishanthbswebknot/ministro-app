import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import user from '../assets/user.png'
import {
  
  TouchableOpacity,
  
  
} from 'react-native'
//import ChatScreen from './ChatScreen';
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
static navigationOptions = {
    title: 'ChatScreen',
};
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        
        <Content>
        
          <List >
            <ListItem avatar>
              <Left>
              <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={require('../assets/user.png')} />
              </Left>
              
              <Body>
                <Text>Abhraham Weintraub</Text>
                <Text note>Ministro da Educacao</Text>
              </Body>
              <Right>
              <Button
                    title="Go to profile screen"
                    onPress={() => navigate(
                        ''
                    )}
                />
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
              <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={require('../assets/user.png')} />
              </Left>
              <Body>
                <Text>Ernesto araujo</Text>
                <Text note>Ministro das relacoes Exteriores</Text>
              </Body>
              <Right>
                <Text note></Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
              <Thumbnail style={{width: 40, height: 40, borderRadius: 30/2}} source={require('../assets/user.png')} />
              </Left>
              <Body>
                <Text>Sergio Moro</Text>
                <Text note> Ministro da Justica e Sergurance</Text>
              </Body>
              <Right>
                <Text note></Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}