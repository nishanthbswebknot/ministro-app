import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabScreen from './components/Tabscreen'
import ChatScreen from './components/ChatScreen'
import Chat from './components/Chat'
import Profile from './components/Profile'
 class App extends React.Component {

  static navigationOptions = ({ navigation }) => {
      return {
          title: navigation.getParam('name'),
      };
  };

  render() {

      const { navigate, state } = this.props.navigation;

      return (
          <View style={styles.container}>

              {/* <Text>Hello {state.params.name}</Text> */}

              <Button
                  title="Go to home screen"
                  onPress={() => navigate('Home')}
              />

          </View>
      );

  }

}

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
