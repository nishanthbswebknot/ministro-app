import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabScreen from './components/Tabscreen'
import ChatScreen from './components/ChatScreen'
import Chat from './components/Chat'
import Profile from './components/Profile'
const navigator = createStackNavigator(
  {


    Home:{screen:TabScreen},
    Chat:{screen:Chat},
    ChatScreen:{ screen:ChatScreen},
  
    Profile: { screen: Profile },
  },
  
  {

    //By default Home Screen will be redirected

    initialRouteName: 'Home',
    
    defaultNavigationOptions: {
     // title: 'App',
      headerShown: false,
     
    }
  }
);

export default createAppContainer(navigator);
