import React from 'react';
import { FlatList, ActivityIndicator, View, } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import Constants from 'expo-constants';
import Agendadata from './Agendadata'
export default class Agenda extends React.Component {

  constructor(props){
    super(props);
    this.state ={ data: null,date:''}
  }

  async componentDidMount(){
   
    const response = await fetch('http://3.82.200.59:3000/agendas');
      const responseJson = await response.json();
       let result=responseJson["data"];
       //console.log(result);
       var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var year = new Date().getFullYear(); //Current Year
      this.setState({
        data:result,
        date:
        date + ' ' + monthNames[month] + ' ' + year ,
      })
      
  }


  render(){
    // console.log("hello")
    // console.log(this.state.data)
    // console.log("hello")
    return(
      <Container>
       
        <Content>
          <View style={{alignItems:"center",margin:10}}>
          <Thumbnail  source={{uri: 'https://hawkeyeeee11.s3.amazonaws.com/Ministro/imagess.jpeg'}} />
          <Text>Ministro da Educacao</Text>
          <Text>Agenda do Ministro da Educacao</Text>
              <Text>  Abraham Weintrab    </Text>
              <Text>  Terca-Feira {this.state.date}    </Text>
              
              </View>
              <View
  style={{
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  }}
/>
<View
  style={{
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    marginTop:3
  }}
/>
{/* <Agendadata data={this.dataSource}/> */}
<List 
         dataArray={this.state.data}
           renderRow={(item)=>{
             return <Agendadata navigation={this.props.navigation} data={item}/>
           }}
         />
        </Content>
      </Container>
      
     
         
      
    );
  }
}
