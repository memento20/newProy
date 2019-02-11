import * as firebase from 'firebase';
import * as Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import ListComponent from './component/ListComponent';

class App extends Component {

  constructor(){
          super();

          this.state = {
              lista: [
                          {
                              id: 1,
                              name: 'pollo',
                              done: false
                          },
                          {
                              id: 2,
                              name: 'sopa',
                              done: false
                          },
                          {
                              id: 3,
                              name: 'ropa',
                              done: false
                          }
                      ]
          };

      }

      changeDone = (item) => {
          console.log(item);
          this.state.lista = this.state.lista.filter(i => i !== item);
          this.state.lista.push(item);
          this.setState({lista: this.state.lista});
      }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
                    <ListComponent
                        />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_mijgP0zTbQqJjEyZC7sXHlUx8L5MGZU",
    authDomain: "reactfirebase-ca6b6.firebaseapp.com",
    databaseURL: "https://reactfirebase-ca6b6.firebaseio.com",
    projectId: "reactfirebase-ca6b6",
    storageBucket: "reactfirebase-ca6b6.appspot.com",
    messagingSenderId: "296445185370"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
