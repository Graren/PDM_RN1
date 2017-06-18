import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      dummyCredentials: [
        {username:"oscar",password:"Holi"},
        {username:"eduardo",password:"Ktal"}
      ],
    }
  }

  onUsernameChange(username){
    this.setState({username})
  }

  onPasswordChange(password){
    this.setState(password)
  }

  onLogin(){

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
